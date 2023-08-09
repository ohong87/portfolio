import {React, useState} from "react";
// import Lightbox from 'react-spring-lightbox';
import Navbar from "../Navbar";
import { Link } from 'react-router-dom';

// import { ImageList, ImageListItem } from '@mui/material';
import PhotoAlbum from "react-photo-album";
// import Gallery from "react-photo-gallery";


import astro1 from '../../images/astro/astroCover.jpg';
import astro2 from '../../images/astro/astro2.jpg';



function Astro() {

    const width = 8000
    const height = 5000

    const photo = [
        {src: astro1,
        width: width,
        height: height},
        {src: astro2,
        width: width,
        height: height},
    ]
    return (
        <div div class="d-flex mx-0 mb-4">
            <Navbar/>
            <div class="container mt-8 mx-8">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb fs-5">
                        <Link class="breadcrumb-item text-primary text-decoration-none" to="/photo">Photo Home</Link>
                        <li class="breadcrumb-item active" aria-current="page">Astrophotography</li>
                    </ol>
                </nav>
                <PhotoAlbum photos={photo} layout="rows" />
            </div>
        </div>
    )
}

export default Astro;