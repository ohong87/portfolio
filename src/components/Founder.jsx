import React from "react";
import Navbar from "./Navbar";
import ReactPlayer from "react-player"

import tii from "../images/tii/TII.png"


function Founder() {
    const bio = "We designed, implemented, and piloted an end-to-end ecosystem of enterprise solutions for New England school districts to modernize and streamline their student career programs."
    return (
        <div>
           <Navbar/>
            <div class="container mt-8 mx-7">
                <div class="row gx-5 justify-content-center">
                    <div class="row h1 gx-5 align-items-center justify-content-center">
                        <img src={tii} style={{"width":"15%"}}/>
                        The Internship Initiative, LLC
                        </div>
                    <p class="fs-4"><em>{bio}</em></p>
                </div>
                <div class="container">
                    <div class="row justify-content-center">
                        <ReactPlayer url="https://www.youtube.com/watch?v=QkF4HkDEj5E&t=1s"/>
                    </div>
                   

                </div>
                    
                
            </div>
        </div>
    )
}

export default Founder;