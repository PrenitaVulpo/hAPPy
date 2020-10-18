import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {FiPlus, FiArrowRight} from 'react-icons/fi'; 
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../img/Map-marker.svg';
import '../styles/pages/map-style.css';
import mapIcon from '../utils/mapIcon';
import api from '../services/api';

interface Institution{
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

function MapPage(){
  const [institutions, setInstitutions] = useState<Institution[]>([]);

  useEffect(()=>{
    api.get('/institutions').then(response => {
      setInstitutions(response.data);
    })
  },[]);

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
                {institutions.map(institution =>{
                  return(
                    <Marker 
                      icon={mapIcon}
                      position={[institution.latitude,institution.longitude]}
                      key={institution.id}
                    >
                      <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        {institution.name}
                        <Link to={`/institutions/${institution.id}`} ><FiArrowRight size={20} color="#FFF"/></Link>
                      </Popup>  
                    </Marker>
                  )
                })}

                {/*<TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/titles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>*/}
              </Map>
          <Link to="/institutions/create" className="create-institution">
              <FiPlus size={32} color="#fff"/>
          </Link>
      </div>
  );
}

export default MapPage;