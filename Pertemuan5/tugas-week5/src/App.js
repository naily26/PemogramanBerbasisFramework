import React from 'react';
import Post, { Barang } from "./Components/barang";
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {
 BrowserRouter as Router,
 Switch,
 Route,
 Link
} from "react-router-dom";

export default function AuthExample() {
  return (
    <Router>
        
      <div>
        <AuthButton />

            <ul class="list-group list-group-horizontal">
              <li class="list-group-item">
                <Link to="/public">Public Page</Link>
              </li>
              <li class="list-group-item">
                <Link to="/private">Private Page</Link>
              </li>
              <li class="list-group-item">
                <Link to="/contact">Contact</Link>
              </li>

        </ul>

        <Switch>
          <Route path="/public">
            <PublicPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/private">
            <Category />
          </PrivateRoute>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
      
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

function AuthButton() {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push(from));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function PublicPage() {
  return (
    <div>
      <h3>Public</h3>
    </div>
  );
}
function Contact() {
  return (
    <div>
      <h3>This is a contact</h3>
    </div>
  );
}

function ProtectedPage() {
  return (
    <div>
      <h3>Private</h3>
    </div>
  );
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

function Topics() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/sate, Nasi goreng`}>Kuliner</Link>
        </li>
        <li>
          <Link to={`${url}/wisata alam, Museum`}>Travelling</Link>
        </li>
        <li>
          <Link to={`${url}/Ibis, JW Marriot`}>Review Hotel</Link>
        </li>
      </ul>

      <switch>
        <Route exact path={path}>
          <h3>Please select a topic</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}

function Category(){
  return (
    <Router>
      <div>
        <ul class="list-group list-group-horizontal">
          <li class="list-group-item">
            <Link to="/category1">Category</Link>
          </li>
          <li class="list-group-item">
            <Link to="/category2">Category 2</Link>
          </li>
        </ul>

        <Switch>
        <Route path="/category1">
            <Barang />
          </Route>
          <Route path="/category2">
            <Topics />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

