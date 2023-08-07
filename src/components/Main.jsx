import '../styles.scss';
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

import {Box, Grid, Item} from "@mui/material";
import { TypeAnimation } from 'react-type-animation';

import mainPhoto from "../images/mainPhoto.png";
import headShot from "../images/pfp.jpeg";


function Main() {
    const bio = "I’ve been a builder for as long as I can remember will be for as far as I can tell. As of now, this has fueled my love for building and scaling products that have the potential to change the world.\nCurrently, I’m a Technical Product Manger @ IBM using WatsonX to help IT customers automate their complex workflows. In the past, I’ve cofounded an EdTech startup that worked with D.O.E and NASA to offer underserved students with internship opportunities, and worked at places ranging between Series B companies and Fortune 50s doing product and software roles.\nOutside of work, I also run a photography business, am trying to go viral on Spotify, and make awesome YouTube vlogs.\nThis site was built with React.js and CSS Bootstrap"

    return (
        <div class="mx-0">
            <Navbar/>
            <div class="mt-8 mx-7">
                <div class="row align-items-center gx-5">
                    <div class="col">
                        <h1 class="display-4">Hello World; I'm Oscar</h1>
                        <p class="fs-4 text-secondary"><em>
                            <TypeAnimation asdf
                            sequence={[
                                "a senior @ USC studying CS + Business",
                                1000,

                                "a product manager supercharging IT teams",
                                1000,

                                'a founder building and growing crazy ideas',
                                1000,

                                'a vlogger documenting life’s adventures',
                                1000,

                                "a photographer capturing future memories",
                                1000,

                                "an aspiring Spotify content creator",
                                1000,

                                "an (avid) aviation geek",
                                1000
                            ]}
                            speed={120}
                            repeat={Infinity}
                            />
                        </em></p>
                        <div class="row justify-content-space-between pt-5">
                            <p class="font-weight-light fs-4 text-secondary">My Current Playlist:</p>
                            <iframe 
                                style={{"border-radius":"12px"}} 
                                src="https://open.spotify.com/embed/playlist/7pHOoo7RfSSydqDkCA8WPh?utm_source=generator&theme=0" 
                                width="100%" 
                                height="152" 
                                frameBorder="0" 
                                allowfullscreen="" 
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                                loading="lazy">
                            </iframe>
                        </div>
                    </div>
                    <div class="col-5">
                        <div class="card border-0">
                            <div class="card-inner">
                                <div class="card-front">
                                    <img src={mainPhoto} alt='Oscar Hong' class="w-100 h-100"/>
                                    <p class="">📸 @oscar.hong.photo | 📍 San Jose, CA</p>
                                </div>                    
                                <div class="card-back">
                                    <img src={headShot} alt='Oscar Hong' class="w-25 rounded-circle"/>
                                    <div class="text-start pt-4 fs-5 gx-0">
                                        <p class="fs-6">
                                            {bio.split('\n').map((paragraph, index) => (<p key={index}>{paragraph}</p>))}
                                        </p>
                                        <hr/>
                                        <div>🎓 CS + Business @ USC ‘24 </div>
                                        <div>💼 TPM Intern @ IBM</div>
                                        <div>📄 <a href="https://docs.google.com/document/d/1zVDS9380neRp4LYbL-DzKEF8LPDYfflp/edit?usp=sharing&ouid=113507540513874664396&rtpof=true&sd=true" class="text-primary">Resume</a></div>
                                        <div>📍 (Currently) San Jose, CA</div>
                                    </div>
                                    <p class="fs-6 justify-content-center pt-4">Feel free to contact me: oscar.hong@usc.edu</p>

                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
        
    );
    }

export default Main;