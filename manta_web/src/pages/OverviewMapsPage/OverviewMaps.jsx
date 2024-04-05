import style from './OverviewMaps.module.css';
import React from 'react';
import { APIProvider, Map, AdvancedMarker, InfoWindow } from "@vis.gl/react-google-maps";

export default function OverviewMaps() {

  //set the Map data UI and location
  const mapOptions = {
    mapId: 'd34c272a99808261',
    streetViewControl: false,
    controlSize: 24,
    center: { lat: 48.7277, lng: 21.2453 },
    zoom: 14,
    disableDefaultUI: true,
  };

  //set the dummy data (weather)
  const weatherData = {
    A: {
      name: "Toronto",
      position: { lat: 43.66293, lng: -79.39314 },
      climate: "Raining",
      temp: 20,
      fiveDay: [15, 18, 12, 22, 20],
    },
    B: {
      name: "Guelph",
      position: { lat: 43.544811, lng: -80.248108 },
      climate: "Cloudy",
      temp: 20,
      fiveDay: [15, 18, 12, 22, 20],
    },
    C: {
      name: "Orangeville",
      position: { lat: 43.919239, lng: -80.097412 },
      climate: "Sunny",
      temp: 20,
      fiveDay: [15, 18, 12, 22, 20],
    },
  };

  // Define the marker position
  const markerPosition = { lat: 48.7277, lng: 21.2453 };

  return (
    <>
      <div className={style.entire}>
        <APIProvider apiKey="add_api_here">
          <div className={style.top}>
            <Map 
              mapContainerStyle={{ width: '100%', height: '100%' }}
              options={mapOptions}
            >
              <AdvancedMarker
                position={markerPosition}
                title="Ninie"
              />
            </Map>
          </div>
        </APIProvider>
        <div className={style.bottom}>
          <h1>docik</h1>  
        </div>
      </div>
    </>
  );
}
