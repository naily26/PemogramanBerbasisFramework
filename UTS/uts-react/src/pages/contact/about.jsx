import { Center } from "@chakra-ui/react";
import React from "react";
import "./about.css";
import images_biodata from "./foto.png";

const AboutStatelsss = () => {
    return (
        <div>
<div class="container mt-5">
    <div class="row d-flex justify-content-center">
        <div class="col-md-12">
            <div class="card p-3 py-4">
                <div class="text-center">
                    <Center> <img src={images_biodata}  class="rounded-circle"/></Center>
                          </div>
                <div class="text-center mt-3"> <span class="bg-secondary p-1 px-4 rounded text-white">Student</span>
                    <h5 class="mt-2 mb-0">Naily Ikmalul Insiyah</h5> <span>Student of Malang State Polytechnic</span>
                    <div class="px-4 mt-1">
                        <p class="fonts">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <ul class="social-list">
                        <li><i class="fa fa-facebook"> Naily Ikmalul Insiyah</i></li><br/>
                        {/* <li><i class="fa fa-dribbble"></i></li><br/> */}
                        <li><i class="fa fa-instagram"> Nailyy26</i></li><br/>
                        <li><i class="fa fa-linkedin"> Nailyy</i></li><br/>
                        <li><i class="fa fa-google"> nailymasruri</i></li><br/>
                    </ul>
                    <div class="buttons"> <button class="btn btn-outline-primary px-4">Message</button> <button class="btn btn-primary px-4 ms-3">Contact</button> </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
    );
};

export default AboutStatelsss;