import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { icon } from "leaflet"
import 'leaflet/dist/leaflet.css';
import axios from 'axios';


export default function Map() {
  const [countriesData, setCountriesData] = useState("");
  const ICON = icon({
    iconUrl: "/marker.png",
    iconSize: [32, 32],
  })
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://disease.sh/v3/covid-19/countries');
      setCountriesData(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className='mapcont'>
        <MapContainer center={[20, 77]} zoom={5} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {countriesData&&
                countriesData.map((i,j)=>(
                    <Marker icon={ICON} position={[i.countryInfo.lat, i.countryInfo.long]}>
                        <Popup>
                            Country Name: {i.country}<br/>
                            Number of active cases: {i.active}<br/>
                            Number of recovered case: {i.recovered}<br/>
                            Number of deaths: {i.deaths}
                        </Popup>
                    </Marker>
                ))    
            }
        </MapContainer>
    </div>
  );
}
