import React from 'react';

import '../styles/global.css';
import '../styles/pages/landing.css';
import logoImg from '../img/logo.svg';
import {FiArrowRight} from 'react-icons/fi';

function Landing(){
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
  
          <a href="" className="enter-app">
            <FiArrowRight size={26} color= "rgba(0,0,0,0.6)"/>
          </a>
        </div>
      </div>
    )
}

export default Landing;