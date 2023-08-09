import React from "react";
import Navbar from "../Navbar";
import { Link } from 'react-router-dom';
import PhotoAlbum from "react-photo-album";

// const importAll = (context) => {
//     let images = {};
//     context.keys().forEach((item) => {
//         images[item.replace('./', '')] = context(item);
//     });
//     return images;
// };

// const filmImages = importAll(require.context('../../images/film', false, /\.(jpeg|jpg)$/));
// console.log(filmImages);

import film1 from '../../images/film/film1.jpeg';
import film2 from '../../images/film/film2.jpeg';
import film3 from '../../images/film/film3.jpeg';
import film4 from '../../images/film/film4.jpeg';
import film5 from '../../images/film/film5.jpeg';
import film6 from '../../images/film/film6.jpeg';
import film7 from '../../images/film/film7.jpeg';
import film8 from '../../images/film/film8.jpeg';
import film9 from '../../images/film/film9.jpeg';
import film10 from '../../images/film/film10.jpeg';
import film11 from '../../images/film/film11.jpeg';
import film12 from '../../images/film/film12.jpeg';
import film13 from '../../images/film/film13.jpeg';
import film14 from '../../images/film/film14.jpeg';
import film15 from '../../images/film/film15.jpeg';
import film16 from '../../images/film/film16.jpeg';
import film17 from '../../images/film/film17.jpeg';
import film18 from '../../images/film/film18.jpeg';
import film19 from '../../images/film/film19.jpeg';
import film20 from '../../images/film/film20.jpeg';
import film21 from '../../images/film/film21.jpeg';
import film22 from '../../images/film/film22.jpeg';
import film23 from '../../images/film/film23.jpeg';
import film24 from '../../images/film/film24.jpeg';
import film25 from '../../images/film/film25.jpeg';
import film26 from '../../images/film/film26.jpeg';
import film27 from '../../images/film/film27.jpeg';
import film28 from '../../images/film/film28.jpeg';
import film29 from '../../images/film/film29.jpeg';
import film30 from '../../images/film/film30.jpeg';
import film31 from '../../images/film/film31.jpeg';
import film32 from '../../images/film/film32.jpeg';
import film33 from '../../images/film/film33.jpeg';
import film34 from '../../images/film/film34.jpeg';
import film35 from '../../images/film/film35.jpeg';
import film36 from '../../images/film/film36.jpeg';
import film37 from '../../images/film/film37.jpeg';

function Film() {
    const width = 8000
    const height = 5000
    const photo = [
        {src: film1,
        width: width,
        height: height},
        {src: film2,
        width: width,
        height: height},
        {src: film3,
        width: width,
        height: height},
        {src: film4,
        width: width,
        height: height},
        {src: film5,
        width: width,
        height: height},
        {src: film6,
        width: width,
        height: height},
        {src: film7,
        width: width,
        height: height},
        {src: film8,
        width: width,
        height: height},
        {src: film9,
        width: width,
        height: height},
        {src: film10,
        width: width,
        height: height},
        {src: film11,
        width: width,
        height: height},
        {src: film12,
        width: width,
        height: height},
        {src: film13,
        width: width,
        height: height},
        {src: film14,
        width: width,
        height: height},
        {src: film15,
        width: width,
        height: height},
        {src: film16,
        width: width,
        height: height},
        {src: film17,
        width: width,
        height: height},
        {src: film18,
        width: width,
        height: height},
        {src: film19,
        width: width,
        height: height},
        {src: film20,
        width: width,
        height: height},
        {src: film21,
        width: width,
        height: height},
        {src: film22,
        width: width,
        height: height},
        {src: film23,
        width: width,
        height: height},
        {src: film24,
        width: width,
        height: height},
        {src: film25,
        width: width,
        height: height},
        {src: film26,
        width: width,
        height: height},
        {src: film27,
        width: width,
        height: height},
        {src: film28,
        width: width,
        height: height},
        {src: film29,
        width: width,
        height: height},
        {src: film30,
        width: width,
        height: height},
        {src: film31,
        width: width,
        height: height},
        {src: film32,
        width: width,
        height: height},
        {src: film33,
        width: width,
        height: height},
        {src: film34,
        width: width,
        height: height},    
        {src: film35,
        width: width,
        height: height},
        {src: film36,
        width: width,
        height: height},
        {src: film37,
        width: width,
        height: height}
    ]
    // const filmList = [];
    // const numberOfFilms = 22; // Adjust this based on the actual number of films

    // for (let i = 1; i <= numberOfFilms; i++) {
    //     filmList.push(`../../images/film/film${i}.jpeg`);
    // }
    // const photo = filmList.map((filmSrc) => ({
    //     src: filmSrc, // Using ".default" due to CommonJS import behavior
    //     width: width,
    //     height: height
    // }));
    // console.log(photo)

    // const photo = Object.keys(filmImages).map((key) => ({
    //     src: filmImages[key].default,
    //     width: width,
    //     height: height,
    // }));

    

    return (
        <div div class="d-flex mx-0 mb-4">
            <Navbar/>
            <div class="container mt-8 mx-8">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb fs-5">
                        <Link class="breadcrumb-item text-primary text-decoration-none" to="/photo">Photo Home</Link>
                        <li class="breadcrumb-item active" aria-current="page">Film Photography</li>
                    </ol>
                </nav>
                <PhotoAlbum photos={photo} layout="columns" />
            </div>
        </div>
    )
}

export default Film;