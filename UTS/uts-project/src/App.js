import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Navbar from './components/navbar/Navbar';
import Products from './pages/Products/Products';
import Cart from './pages/Products/Cart';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

import './App.css';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import About from './components/about/About';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/product' component={Products} />
          <Route path='/cart' component={Cart} />
          <Route path='/about' component={About} />
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
}

function Home() {
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
                            <h1 class="h1 text-success"><b>Hitachi</b> eCommerce</h1>
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
export default App;
