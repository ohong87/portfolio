import '../styles.scss';

import { FaGithubSquare, FaInstagram, FaLinkedin, FaSpotify, FaTwitter, FaYoutube } from "react-icons/fa";

import { Link } from 'react-router-dom';
import React from 'react';
import pfp from '../images/pfp.jpeg';

function Navbar () {
    return (
        <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body fixed-top" data-bs-theme="dark">
            <div class="container-fluid">
                <div class="navbar-nav">
                    <Link to="/portfolio" class="nav-brand " style={{
                        display: "flex",
                        "alignItems": "center",
                        textDecoration: 'none',
                        color: 'white',
                        padding: '10px 1rem 10px 0px',
                        marginTop: '-1px',
                    }}>
                        <img src={pfp} class="me-2" width="50" height="50" style={{"borderRadius":"50%"}}/>
                        Oscar Hong
                    </Link>
                    <Link class="nav-link" to="/photo">
                        Photographer
                        {/* <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#"> Submenu item 1</a></li>
                            <li><a class="dropdown-item" href="#"> Submenu item 2 </a></li>
                            <li><a class="dropdown-item" href="#"> Submenu item 3 </a></li>
                        </ul> */}
                    </Link>
                    {/* <Link class="nav-link" to="/projects">Developer</Link>
                    <Link class="nav-link" to="/founder">Founder</Link> */}

                </div>
                <div class="navbar-right-col">
  
                    <a class="navbar-brand" href="https://github.com/ohong87">
                        <FaGithubSquare class="navbar-icon" icon="fa-brands fa-github-square" />
                    </a>
                    <a class="navbar-brand" href="https://www.linkedin.com/in/oscar-hong/">
                        <FaLinkedin class="navbar-icon" icon="fa-brands fa-linkedin" />
                    </a>
                    <a class="navbar-brand" href="https://open.spotify.com/user/jkadw56dmh943cxku8r0hgap9?si=37cfdac009304cb5">
                        <FaSpotify class="navbar-icon" icon="fa-brands fa-spotify" />
                    </a>
                    <a class="navbar-brand" href="https://www.instagram.com/oscar.hong/">
                        <FaInstagram class="navbar-icon" icon="fa-brands fa-instagram" />
                    </a>

                    <a class="navbar-brand" href="https://twitter.com/ohong87">
                        <FaTwitter class="navbar-icon" icon="fa-brands fa-twitter" />
                    </a>
                    <a class="navbar-brand" href="https://www.youtube.com/channel/UCYVyjrCq8145lU3jDqvrMhQ">
                        <FaYoutube class="navbar-icon" icon="fa-brands fa-youtube" />
                    </a>
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar;