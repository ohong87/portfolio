import React, { useEffect, useState } from "react";

import Navbar from "./Navbar";
import mainPhoto from "../images/mainPhoto.png";
import { TypeAnimation } from 'react-type-animation';
import Box from '@mui/material/Box';

import '../styles.scss';
import styles from '../styles.scss';


function Main() {
    const bio = "I'm a senior studying CS + Business at USC. I'm extremely passionate about startups and am always looking for ways to explore the intersections of entrepreneurship and technology. I'm currently interning at IBM as a Technical Product Manger, building and shipping an experimental AI product under WatsonX. In my past, I cofounded an EdTech startup to help underprivileged high schoolers access internship opportunities, securing interest from almost every school district in New England and from organizations like the US Dept. of Energy. From my prior internship experiences, I've grown under C-suite executives at startups and Fortune 50s alike, with skills ranging between Product Management, Business Strategy, Market Analysis, and Design Thinking. On the technical side, I’m also experienced with designing, building, and shipping web applications from various school and personal projects. I've experience in front-end software development (React.js, HTML) and object oriented programming (C++, Java, Python)."
    return (
        <>
            <Navbar/>
            <div class="container" style={{"marginTop":"10%", "padding":"0% 6%", "background":"#fff"}}>
                <div class="row align-items-center">
                    <div class="col">
                        <div class="row">
                            <div class="col"> 
                                <h1 class="display-4">
                                    Hello World; I'm Oscar</h1>
                            </div>
                        </div>
                        <div class="row">
                            <p class="main-bio"><em>
                                <TypeAnimation
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
                        </div>
                        <div class="row justify-content-space-between" style={{"paddingTop":"10%"}}>
                            <div class="col-4"><p class="h4">My Current Playlist:</p></div>
                            <div class="col" style={{"marginRight":"5%"}}>
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
                    </div>
                    <div class="col-4 " style={{"background":"black"}}>
                        <div class="card-rotate">
                            <div class="card-inner">
                                <div class="card-front">
                                    <div class="row">
                                        <img src={mainPhoto} height="100%" width="100%" />
                                    </div>
                                    <div class="row">
                                        <p class="">📸 @oscar.hong.photo | 📍 San Jose, CA</p>
                                    </div>
                                </div>
                                <div class="card-back">
                                    <img></img>
                                    <p>{bio}</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
        
    );
    }

export default Main;


// const getReturnParamsFromSpotifyAuth = (hash)   => {
//     console.log('here');
//     const stringAfterHashtag = hash.substring(1);
//     const paramsInUrl = stringAfterHashtag.split("&");
//     const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
//         console.log("currval here" + currentValue);
//         const [key, value] = currentValue.split("=");
//         accumulater[key] = value;
//         return accumulater;
//     }, {});
//     console.log("haha" + paramsInUrl)
//     return paramsSplitUp;
// }

// const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
// const SCOPES = [
//     "user-read-currently-playing",
//     "user-read-playback-state"
// ];

// const REACT_APP_REDIRECT_URI_AFTER_LOGIN = "http://localhost:3000/portfolio"
// const REDIRECT_URI = "http://localhost:3000/portfolio/callback"
// const SCOPES_URL_PARAM = SCOPES.join("%20");
// const CLIENT_ID = "35879252c9374392822218b00dad1011"

    // // {/* <button onClick = {handleLogin}>
    // //     click me
    // // </button> */}
    // // <button onClick={getNowPlayingItem} >
    // //     also click me
    // // </button>
    //     // const CLIENT_ID = "35879252c9374392822218b00dad1011"
    // // const SECRET_ID = "a6f09a84ec434d17ab30588bc358f98c"
    // // const REDIRECT_URI = "http://localhost:3000/portfolio/callback"

    // // var SpotifyWebApi = require('spotify-web-api-node');
    // // const spotifyApi = new SpotifyWebApi({
    // //     clientId: CLIENT_ID,
    // //     clientSecret: SECRET_ID,
    // //     redirectUri: REDIRECT_URI
    // // })


    // // var code = 'MQCbtKe23z7YzzS44KzZzZgjQa621hgSzHN';

    // // // Retrieve an access token and a refresh token
    // // spotifyApi.authorizationCodeGrant(code).then(
    // //   function(data) {
    // //     pe('The token expires in ' + data.body['expires_in']);
    // //     console.log('The access token is ' + data.body['access_token']);
    // //     console.log('The refresh token is ' + data.body['refresh_token']);
    
    // //     // Set the access token on the API object to use it in later calls
    // //     spotifyApi.setAccessToken(data.body['access_token']);
    // //     spotifyApi.setRefreshToken(data.body['refresh_token']);
    // //   },
    // //   function(err) {
    // //     console.log('Something went wrong!', err);
    // //   }
    // // );

    // var SpotifyWebApi = require('spotify-web-api-node');
    // const spotifyApi = new SpotifyWebApi({
    //     clientId: CLIENT_ID,
    //     clientSecret: process.env.REACT_APP_SECRET_ID,
    //     constRedirectUri: REDIRECT_URI
    // })

    // // const handleLogin = () => {
    // //     window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URI_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`
    // // }
    
    // const getNowPlayingItem = async() => {
    //     console.log("the access token" + accessToken)
    //     spotifyApi.setAccessToken(accessToken);

    //     var nowPlaying = []

    //     spotifyApi.getMyCurrentPlayingTrack()
    //     .then(function(data) {
    //         console.log("data" + data.body.item.show)
    //       console.log('Now playing name: ' + data.body.item.name);
    //       console.log('artist' + data.body.item.artists[0]);
    //       console.log('album ' + data.body.item.album.name);
    //       console.log('album image ' + data.body.item.album.images[0].url);
    //       if (data.body.item.preview_url != null) {
    //         nowPlaying.push(
    //             <box>
    //                 <list>
    //                 <listItem>
    //                 <text>
    //                     {data.body.item.name}
    //                 </text>
    //                 </listItem>
    //                 <listItem>
    //                 <video>
    //                     <source src={data.body.item.preview_url} type="video/mp4"/>
    //                 </video>
    //                 </listItem>
    //                 <listItem>
    //                 <image src={data.body.item.album.images[0].url}/>
    //                 </listItem>

    //                 </list>
    //             </box>
    //           )
    //       }


    

    //       setNowPlayingItem(nowPlaying);

    //     }, function(err) {
    //       console.log('Something went wrong!', err);
    //     });
    //     console.log("fart")
    // }

    // const [nowPlayingItem, setNowPlayingItem] = useState([]);
    // const [accessToken, setAccessToken] = useState("");

    // useEffect(() => {
    //     if (window.location.hash) {
    //         const {access_token,
    //         expire_in,
    //         token_type,
    //         }  = getReturnParamsFromSpotifyAuth(window.location.hash);
    //         console.log("access token here" + access_token);
    //         setAccessToken(access_token);
    //         console.log("access token here" + accessToken.toString());
    //     }}, [])

    // // useEffect(() => {
    // //     if (accessToken === "") {
    // //         handleLogin();
    // //     } 
    // // })
    //             <list>
    // {nowPlayingItem}
    // </list>