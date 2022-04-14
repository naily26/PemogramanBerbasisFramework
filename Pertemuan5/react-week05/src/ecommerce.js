import React from 'react';

import './App.css';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

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


const singleGamis = [
  {id:1, nama: "Gamis Nibras Nbrs NB B04", img: "https://lzd-img-global.slatic.net/g/p/8d437809eecdf1b1654874342bd6777b.jpg_720x720q80.jpg_.webp", harga: "IDR 199.800"},
  {id:2, nama: "Gamis Nibras NB A93", img: "https://images.tokopedia.net/img/cache/700/VqbcmM/2021/5/20/29a695f8-23c0-4a0b-8468-f0b98780ceaf.jpg", harga: "IDR 299.800"},
  {id:3, nama: "Gamis Nibras NB B02", img: "https://cf.shopee.co.id/file/79fffafc7796a045cdd9fbb9b6d92615", harga: "IDR 399.800"},
  {id:4, nama: "Gamis Nibras NB B02", img: "https://cf.shopee.co.id/file/79fffafc7796a045cdd9fbb9b6d92615", harga: "IDR 399.800"},
]

const familyGamis = [
  {id:1 , nama: "SARIMBIT NIBRAS 2021 CARINA SET FAMILY", img: "https://cf.shopee.co.id/file/d68e499e654a34caf45b4cd3758abf02", harga: "IDR 1.399.800"},
  {id:2 , nama: "GAMIS SARIMBIT TERBARU 2022 NIBRAS EXPRESSION WALNUT", img: "https://cf.shopee.co.id/file/fe289b1d95ea16ce28bccfaf8b6756d9", harga: "IDR 1.299.800"},
  {id:3 , nama: " NIBRAS COUPLE MUSLIM 2022 SARIMBIT EXPRESSION", img: "https://cf.shopee.co.id/file/919027ecc6b37f2151bad01a768ecd2f", harga: "IDR 1.199.800"},
  {id:4 , nama: " NIBRAS COUPLE MUSLIM 2022 SARIMBIT EXPRESSION", img: "https://cf.shopee.co.id/file/919027ecc6b37f2151bad01a768ecd2f", harga: "IDR 1.199.800"},
]


export default function Ecommerce() {
 

  return (
    
    
      <Router>
        <AuthButton/>

        
              <div class="  navbar-expand-lg navbar-light shadow align-self-center navbar-collapse  " id="templatemo_main_nav">
                
                  <div class="flex-fill">
                      <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                      <a class="navbar-brand text-success logo h2 align-self-center" href="#">
                  Nibrass Store
                  </a>
                          <li class="nav-item">
                            <Link class="nav-link" to="/public">Home</Link>
                          </li>
                          <li class="nav-item">
                            <Link class="nav-link" to="/collection">Collection</Link>
                          </li>
                          <li class="nav-item">
                            <Link class="nav-link" to="/contact">Contact</Link>
                          </li>
                          
                      </ul>

                      <Switch>
                        <Route path="/public">
                          <PublicPage />
                        </Route>
                        
                        <Route path="/login">
                          <LoginPage />
                        </Route>
                        <PrivateRoute path="/collection">
                          <NestCollection />
                        </PrivateRoute>
                        <Route path="/contact">
                          <Contact />
                        </Route>
                        <Route path="/">
                          <PublicPage />
                        </Route>
                        
                      </Switch>
                      
                  </div>
                  
              </div>
              

          
        
       
        <div class="modal fade bg-white" id="templatemo_search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
              <div class="w-100 pt-1 mb-5 text-right">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form action="" method="get" class="modal-content modal-body border-0 p-0">
                  <div class="input-group mb-2">
                      <input type="text" class="form-control" id="inputModalSearch" name="q" placeholder="Search ..." />
                      <button type="submit" class="input-group-text bg-success text-light">
                          <i class="fa fa-fw fa-search text-white"></i>
                      </button>
                  </div>
              </form>
          </div>
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
    
    <nav class="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
          <div class="container text-light">
              <div class="w-100 d-flex justify-content-between">
                  <div>
                      <i class="fa fa-envelope mx-2"></i>
                      <a class="navbar-sm-brand text-light text-decoration-none" href="#">Welcome</a>
                       
                  </div>
                  <button className="btn btn-success"
                            onClick={() => {
                              fakeAuth.signout(() => history.push(from));
                            }}
                          >
                            Sign out
                          </button>
              </div>
          </div>
        </nav>
  ) : (
    
    <nav class="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
          <div class="container text-light">
              <div class="w-100 d-flex justify-content-between">
                  <div>
                      <i class="fa fa-envelope mx-2"></i>
                      <a class="navbar-sm-brand text-light text-decoration-none" href="#">You are not logged in</a>
                      
                  </div>
                  
              </div>
          </div>
        </nav>
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
    <div id="template-mo-jassa-hero-carousel" class="carousel slide" data-bs-ride="carousel">
    <ol class="carousel-indicators">
        <li data-bs-target="#template-mo-jassa-hero-carousel" data-bs-slide-to="0" class="active"></li>
        <li data-bs-target="#template-mo-jassa-hero-carousel" data-bs-slide-to="1"></li>
        <li data-bs-target="#template-mo-jassa-hero-carousel" data-bs-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <div class="container">
                <div class="row p-5">
                    <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                        <img class="img-fluid" src="https://therichpost.com/wp-content/uploads/2021/05/banner_img_01.jpg" alt="" />
                    </div>
                    <div class="col-lg-6 mb-0 d-flex align-items-center">
                        <div class="text-align-left align-self-center">
                            <h1 class="h1 text-success"><b>Nibrass</b> eCommerce</h1>
                            <br></br>
                            <p>
                            Nibras merupakan brand busana muslimah yang selalu mengutamakan kenyamanan bagi pemakai dengan menggunakan kain berkualitas yang nyaman ketika dipakai. Busana muslim Nibras menghadirkan busana yang sesuai dengan akidah dan mode yang syar'i serta dinamis bagi pencinta gamis muslim.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="carousel-item">
            <div class="container">
                <div class="row p-5">
                    <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                        <img class="img-fluid" src="https://therichpost.com/wp-content/uploads/2021/05/banner_img_02.jpg" alt="" />
                    </div>
                    <div class="col-lg-6 mb-0 d-flex align-items-center">
                        <div class="text-align-left">
                        <h1 class="h1">Nibrass Gamis</h1>
                            <br></br>
                            <p>
                            Nibras merupakan brand busana muslimah yang selalu mengutamakan kenyamanan bagi pemakai dengan menggunakan kain berkualitas yang nyaman ketika dipakai. Busana muslim Nibras menghadirkan busana yang sesuai dengan akidah dan mode yang syar'i serta dinamis bagi pencinta gamis muslim.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="carousel-item">
            <div class="container">
                <div class="row p-5">
                    <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                        <img class="img-fluid" src="https://therichpost.com/wp-content/uploads/2021/05/banner_img_03.jpg" alt="" />
                    </div>
                    <div class="col-lg-6 mb-0 d-flex align-items-center">
                        <div class="text-align-left">
                            <h1 class="h1">Nibrass Gamis</h1>
                            <br></br>
                            <p>
                            Nibras merupakan brand busana muslimah yang selalu mengutamakan kenyamanan bagi pemakai dengan menggunakan kain berkualitas yang nyaman ketika dipakai. Busana muslim Nibras menghadirkan busana yang sesuai dengan akidah dan mode yang syar'i serta dinamis bagi pencinta gamis muslim.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <a class="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-jassa-hero-carousel" role="button" data-bs-slide="prev">
        <i class="fas fa-chevron-left"></i>
    </a>
    <a class="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-jassa-hero-carousel" role="button" data-bs-slide="next">
        <i class="fas fa-chevron-right"></i>
    </a>
  </div>
  </div>
  );
}

function Contact() {
  return (
    
    
    <div class="bg-dark" id="tempaltemo_footer">
          <div class="container">
              <div class="row">

                  <div class="col-md-4 pt-5">
                      <h2 class="h2 text-success border-bottom pb-3 border-light logo">Jassa Shop</h2>
                      <ul class="list-unstyled text-light footer-link-list">
                          <li>
                              <i class="fas fa-map-marker-alt fa-fw"></i>
                              India
                          </li>
                          <li>
                              <i class="fa fa-phone fa-fw"></i>
                              <a class="text-decoration-none" href="#">000-000-0000</a>
                          </li>
                          <li>
                              <i class="fa fa-envelope fa-fw"></i>
                              <a class="text-decoration-none" href="#">info@company.com</a>
                          </li>
                      </ul>
                  </div>

                  <div class="col-md-4 pt-5">
                      <h2 class="h2 text-light border-bottom pb-3 border-light">Products</h2>
                      <ul class="list-unstyled text-light footer-link-list">
                          <li><a class="text-decoration-none" href="#">Luxury</a></li>
                          <li><a class="text-decoration-none" href="#">Sport Wear</a></li>
                          <li><a class="text-decoration-none" href="#">Men's Shoes</a></li>
                          <li><a class="text-decoration-none" href="#">Women's Shoes</a></li>
                          <li><a class="text-decoration-none" href="#">Popular Dress</a></li>
                          <li><a class="text-decoration-none" href="#">Gym Accessories</a></li>
                          <li><a class="text-decoration-none" href="#">Sport Shoes</a></li>
                      </ul>
                  </div>

                  <div class="col-md-4 pt-5">
                      <h2 class="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
                      <ul class="list-unstyled text-light footer-link-list">
                          <li><a class="text-decoration-none" href="#">Home</a></li>
                          <li><a class="text-decoration-none" href="#">About Us</a></li>
                          <li><a class="text-decoration-none" href="#">Shop Locations</a></li>
                          <li><a class="text-decoration-none" href="#">FAQs</a></li>
                          <li><a class="text-decoration-none" href="#">Contact</a></li>
                      </ul>
                  </div>

              </div>

              <div class="row text-light mb-4">
                  <div class="col-12 mb-3">
                      <div class="w-100 my-3 border-top border-light"></div>
                  </div>
                  <div class="col-auto me-auto">
                      <ul class="list-inline text-left footer-icons">
                          <li class="list-inline-item border border-light rounded-circle text-center">
                              <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-facebook-f fa-lg fa-fw"></i></a>
                          </li>
                          <li class="list-inline-item border border-light rounded-circle text-center">
                              <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-instagram fa-lg fa-fw"></i></a>
                          </li>
                          <li class="list-inline-item border border-light rounded-circle text-center">
                              <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-twitter fa-lg fa-fw"></i></a>
                          </li>
                          <li class="list-inline-item border border-light rounded-circle text-center">
                              <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-linkedin fa-lg fa-fw"></i></a>
                          </li>
                      </ul>
                  </div>
                  <div class="col-auto">
                      <label class="sr-only" for="subscribeEmail">Email address</label>
                      <div class="input-group mb-2">
                          <input type="text" class="form-control bg-dark border-light" id="subscribeEmail" placeholder="Email address" />
                          <div class="input-group-text btn-success text-light">Subscribe</div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="w-100 bg-black py-3">
              <div class="container">
                  <div class="row pt-2">
                      <div class="col-12">
                          <p class="text-left text-light">
                              Copyright &copy; 2021 Company Name 
                              | Designed by <a rel="sponsored" href="#" target="_blank">Jassa</a>
                          </p>
                      </div>
                  </div>
              </div>
          </div>

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
    <div className="container">
      <p>You must log in to view the page at {from.pathname}</p>
      <button className="btn btn-success" onClick={login}>Log in</button>
      <br></br>
    </div>
  );
}



function NestCollection() {
  let { path, url } = useRouteMatch();
  return(
    <>
    <br></br>
    <section class="container">
          <div class="row text-center pt-3">
              {/* <div class="col-lg-6 m-auto"> */}
                  <h1 class="h1">Categories of Product</h1>
                  <br></br>
                  <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                    <li class="nav-item">
                        <Link class="nav-link" to = {`${url}/single`}>Single Gamis</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to = {`${url}/family`}>Family Sarimbit</Link>
                    </li>
                    
                </ul>
                <br></br>
                <hr></hr>
                <br></br>
              
          
      

          <Switch>
              <Route exact path = {path}>
                  <h3>Please select a Category.</h3>
              </Route>
              <Route path = {`${path}/single`}>  
                  <Single />
              </Route>
              <Route path = {`${path}/family`}>  
                  <Family />
              </Route>
              
          </Switch>
          {/* </div> */}
        </div>
        </section>
    </>
  );
}

const ProductSingle=(props)=> {
  return (
    <div class="col-12 col-md-3 mb-3">
    <div class="card h-100">
        <a href="#">
            <img src={props.img} class="card-img-top" alt="..." />
        </a>
        <div class="card-body ">
            <ul class="list-unstyled d-flex justify-content-between">
                <li>
                    <i class="text-warning fa fa-star"></i>
                    <i class="text-warning fa fa-star"></i>
                    <i class="text-warning fa fa-star"></i>
                    <i class="text-muted fa fa-star"></i>
                    <i class="text-muted fa fa-star"></i>
                </li>
                <li class="text-muted text-right">{props.harga}</li>
            </ul>
            <a href="#" class="h2 text-decoration-none text-dark">{props.nama}</a>
            <p class="h6 card-text">
                Gamis berkualitas dengan detail desain yang unik 
            </p>
            <p class="text-muted">Reviews (24)</p>
        </div>
    </div>
  </div>
    );
}

const ProductsSingle =({prods})=>{
  return (
    <div class="row">

  {prods.map(prod=>(
      <ProductSingle img={prod.img} nama={prod.nama} harga={prod.harga} />
  ))
  }
  </div>
  )
};

function Single() {
  return(
          <Route exact path='/collection/single' render={(props)=>
            
                  <ProductsSingle prods={singleGamis}/>
            
              
              }
          />
  );
}

const ProductFamily=(props)=> {
  return (
    <div class="col-12 col-md-3 mb-3">
    <div class="card h-100">
        <a href="#">
            <img src={props.img} class="card-img-top" alt="..." />
        </a>
        <div class="card-body ">
            <ul class="list-unstyled d-flex justify-content-between">
                <li>
                    <i class="text-warning fa fa-star"></i>
                    <i class="text-warning fa fa-star"></i>
                    <i class="text-warning fa fa-star"></i>
                    <i class="text-warning fa fa-star"></i>
                    <i class="text-muted fa fa-star"></i>
                </li>
                <li class="text-muted text-right">{props.harga}</li>
            </ul>
            <a href="#" class="h2 text-decoration-none text-dark">{props.nama}</a>
            <p class="h6 card-text">
                Gamis berkualitas dengan detail desain yang unik 
            </p>
            <p class="text-muted">Reviews (24)</p>
        </div>
    </div>
  </div>
  );
}

const ProductsFamily =({prods})=>{
  return (
    <div class="row">

  {prods.map(prod=>(
      <ProductFamily img={prod.img} nama={prod.nama} harga={prod.harga} />
  ))
  }
  </div>
  )
};

function Family() {
  return(
          <Route exact path='/collection/family' render={(props)=>
            
                  <ProductsFamily prods={familyGamis}/>
              
              }
          />
  );
}