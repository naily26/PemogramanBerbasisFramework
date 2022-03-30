import React from "react";

    export function Home(){
    return (
        <>
        <section class="py-11 bg-light-gradient border-bottom border-white border-5">
        <div class="bg-holder overlay overlay-light" style={{backgroundImage:"url(assets/img/gallery/header-bg.png)",backgroundSize:"cover"}}></div>
        
        <div class="container">
          <div class="row flex-center">
            <div class="col-12 mb-10">
              <div class="d-flex align-items-center flex-column">
                <h1 class="fw-normal"> With an outstanding style, only for you</h1>
                <h1 class="fs-4 fs-lg-8 fs-md-6 fw-bold">Exclusively designed for you</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section class="py-0" id="header">
        <div class="container">
          <div class="row g-0">
            <div class="col-md-6">
              <div class="card card-span h-100 text-white"> <img class="img-fluid" src="assets/img/gallery/her.png" width="790" alt="..." />
                <div class="card-img-overlay d-flex flex-center"> <a class="btn btn-lg btn-light" href="#!">For Her</a></div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card card-span h-100 text-white"> <img class="img-fluid" src="assets/img/gallery/him.png" width="790" alt="..." />
                <div class="card-img-overlay d-flex flex-center"> <a class="btn btn-lg btn-light" href="#!">For Him </a></div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
      </section>
      </>
      
      

    );
}

export default Home;