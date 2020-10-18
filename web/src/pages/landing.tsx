import React from 'react';
import{Link} from 'react-router-dom';

import '../styles/global.css';
import '../styles/pages/landing.css';
import logoImg from '../img/logo.svg';
import {FiArrowRight} from 'react-icons/fi';

function Landing(){
  if ("geolocation" in navigator) {
    console.log("Available");
    navigator.geolocation.getCurrentPosition(position => {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    }, error=>{
      console.error("Error Code = " + error.code + " - " + error.message);
    });
  } else {
    console.log("Not Available");
  }
    
    return(
        <div id="page-landing">
        <div className="content-wrapper">
          <img src={logoImg} alt="Happy"/>
  
          <main>
            <h1>Leve felicidade para o mundo</h1>
            <p>Visite instituições e mude o dia de muitas crianças</p>
          </main>
  
          <div className="location">
            <strong>Barbalha</strong>
            <span>Ceará</span>
          </div>
  
          <Link to="/app" className="enter-app">
            <FiArrowRight size={26} color= "rgba(0,0,0,0.6)"/>
          </Link>
        </div>
      </div>
    )
}

export default Landing;