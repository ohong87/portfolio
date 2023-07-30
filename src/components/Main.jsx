import React from "react";
import Navbar from "./Navbar";
import { TypeAnimation } from 'react-type-animation';


function Main() {
    return (
        <>
            <Navbar/>
            <div class="container text-center">
                <div class="row">
                <div class="col">
                    <TypeAnimation
                    sequence={[
                        "Hello World; I’m Oscar, a senior @ USC studying CS + Business",
                        1000,

                        "Hello World; I’m Oscar, a Product Manager supercharging IT teams",
                        1000,

                        'Hello World; I’m Oscar, a founder building and growing life-changing ideas',
                        1000,

                        'Hello World; I’m Oscar, a vlogger documenting life’s adventures',
                        1000,

                        "Hello World; I’m Oscar, a photographer capturing future memories",
                        1000,

                        "Hello World; I’m Oscar, an aspiring Spotify content creator",
                        1000,

                        "Hello World; I’m Oscar, an (avid) aviation geek",
                        1000
                      ]}
                    //   wrapper="span"
                      speed={100}
                      style={{ fontSize: '2em', display: 'inline-block' }}
                      repeat={Infinity}
                    />

                </div>
                <div class="col">
                    Picture
                </div>
                </div>
            </div>
        </>
        
    );
    }

export default Main;