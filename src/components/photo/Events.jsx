import React from "react";
import Navbar from "../Navbar";
import { Link } from 'react-router-dom';
import PhotoAlbum from "react-photo-album";

import event1 from '../../images/event/eventCover.jpg';
import event2 from '../../images/event/event2.jpg';


function Events() {
    const width = 8000
    const height = 5000

    const photo = [
        {src: event1,
        width: width,
        height: height},
        {src: event2,
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
                        <li class="breadcrumb-item active" aria-current="page">Event Photography</li>
                    </ol>
                </nav>
                <PhotoAlbum photos={photo} layout="rows" />
            </div>
        </div>
    )
}
export default Events;