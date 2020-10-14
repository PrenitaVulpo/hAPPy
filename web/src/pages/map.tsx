import React from 'react';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi'; 
import {Map, TileLayer} from 'react-leaflet'; 
import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../img/Map-marker.svg';
import '../styles/pages/map-style.css';

function MapPage(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="happy"/>
                    <h2>Escolha uma instituição no mapa</h2>
                    <p>Muitas crianças estão espreando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Barbalha</strong>
                    <span>Ceará</span>
                </footer>
            </aside>
            <Map
                center={[-7.3170944,-39.3019392]}
                zoom={15}
                style={{
                    width: '100%', height: '100%'}}>
                    <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                </Map>
            <Link to="" className="create-institution">
                <FiPlus size={32} color="#fff"/>
            </Link>
        </div>
    );
}

export default MapPage;