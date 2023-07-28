import React from 'react';
import '../styles.scss';
import github from '../images/github.png';
import ig from '../images/instagram.png';
import linkedin from '../images/linkedin.png';
import pfp from '../images/pfp.jpeg';
import twitter from '../images/twitter.png';
import youtube from '../images/youtube.png';
import { FaInstagram, FaGithubSquare, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";


function Navbar () {
    return (
        <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
            <div class="container-fluid">
                <div class="collapse navbar-collapse">
                    <a class="navbar-brand" href="#">
                        <img src={pfp} width="30" height="24"/>
                        Oscar Hong
                    </a>
                    <div class="navbar-nav">
                        <a class="nav-link" href="#">Photographer</a>
                        <a class="nav-link" href="#">Developer</a>
                        <a class="nav-link" href="#">Founder</a>
                    </div>

                </div>
                <div>
                    <a class="navbar-brand" href="#">
                        <FaGithubSquare icon="fa-brands fa-github-square" />
                    </a>
                    <a class="navbar-brand" href="#">
                        <FaLinkedin icon="fa-brands fa-linkedin" />
                    </a>
                    <a class="navbar-brand" href="#">
                        <FaInstagram icon="fa-brands fa-instagram" />
                    </a>

                    <a class="navbar-brand" href="#">
                        <FaTwitter icon="fa-brands fa-twitter" />
                    </a>
                    <a class="navbar-brand" href="#">
                        <FaYoutube icon="fa-brands fa-youtube" />
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;