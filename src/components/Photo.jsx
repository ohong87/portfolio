import '../styles.scss';
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import stars from '../images/astro.jpg';
import btg from '../images/eventCover.jpg';
import grad from '../images/gradCover.jpeg';
import la from '../images/la-skyline.jpg';
import { Link } from 'react-router-dom';

import { ImageList, ImageListItem } from '@mui/material';

import PhotoAlbum from "react-photo-album";


function Photo() {
    const bio = "I started taking photos during quarantine in 2020. After my final months of high school were cut short, I went through every photo from the previous 4 years to find closure in ending a huge chapter of my life. But much to my disappointment, there were barely any photos to choose from—I was so busy working that I forgot to document all the little things. \n Seeing as I was about to start college in a few months, and with that, a new chapter in my life, I vowed to not make the same mistake. \nSince then, I’ve been taking photos of life’s adventures to document all my future memories. Below, I’ve shared some of my favorite ones 📸😉"
    const cardSize = "col-4"
    return (
        <div class="d-flex mx-0">
            <Navbar/>
            <div class="container mt-8 mx-8">
                <p class="fs-5">
                    {bio.split('\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </p>
                
                <div class="container">
                    <div class="row justify-content-center">
                        <div class={cardSize}>
                            <div class="card ">
                                <img src={stars} class="card-img-top"/>
                                <div class="card-body">
                                    <h5 class="card-title">Astrophotography</h5>
                                    <p class="card-text">My favorite subcategory within photography...the stars!</p>
                                    <Link to="/photo/astro" class="btn btn-primary">Check it out!</Link>
                                </div>
                            </div>
                        </div>
                        <div class={cardSize}>
                            <div class="card" >
                                <img src={btg} class="card-img-top"/>
                                <div class="card-body">
                                    <h5 class="card-title">Event Photography</h5>
                                    <p class="card-text">Various professional and social events from over the years</p>
                                    <Link to="/photo/events" class="btn btn-primary">Check it out!</Link>
                                </div>
                            </div>
                        </div>
                        <div class={cardSize}>
                            <div class="card" >
                                <img src={grad} class="card-img-top"/>
                                <div class="card-body">
                                    <h5 class="card-title">Grad Photos</h5>
                                    <p class="card-text">Individual, group, club, and any other possible professional grad photos</p>
                                    <Link to="/photo/grad" class="btn btn-primary">Check it out!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center pt-4">
                        <div class={cardSize}>
                            <div class="card ">
                                <img src={stars} class="card-img-top"/>
                                <div class="card-body">
                                    <h5 class="card-title">Astrophotography</h5>
                                    <p class="card-text">My favorite subcategory within photography...the stars!</p>
                                    <Link to="/photo/astro" class="btn btn-primary">Check it out!</Link>
                                </div>
                            </div>
                        </div>
                        <div class={cardSize}>
                            <div class="card" >
                                <img src={btg} class="card-img-top"/>
                                <div class="card-body">
                                    <h5 class="card-title">Event Photography</h5>
                                    <p class="card-text">Various professional and social events from over the years</p>
                                    <Link to="/photo/events" class="btn btn-primary">Check it out!</Link>
                                </div>
                            </div>
                        </div>
                        <div class={cardSize}>
                            <div class="card" >
                                <img src={grad} class="card-img-top"/>
                                <div class="card-body">
                                    <h5 class="card-title">Grad Photos</h5>
                                    <p class="card-text">Individual, group, club, and any other possible professional grad photos</p>
                                    <Link to="/photo/grad" class="btn btn-primary">Check it out!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Photo;