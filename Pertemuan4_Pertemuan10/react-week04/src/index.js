import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import BlogPost from "./container/BlogPost/BlogPost"
import BlogMahasiswa from "./container/BlogPost/BlogMahasiswa"

// ReactDOM.render(
//   <React.StrictMode>
//     <BlogPost />
//   </React.StrictMode>,
//   document.getElementById('content')
// );

ReactDOM.render(<BlogMahasiswa />, document.getElementById('content'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
