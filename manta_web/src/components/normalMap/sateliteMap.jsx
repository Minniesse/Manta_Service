import React, { useState } from 'react';
import { APIProvider, Map, AdvancedMarker, InfoWindow } from "@vis.gl/react-google-maps";

const Satelliteview = ({ mapTypeId }) => {
  const mapOptions = {
    mapId: 'd34c272a99808261',
    streetViewControl: false,
    controlSize: 24,
    center: { lat: 43.66293, lng: -79.39314 },
    zoom: 8,
    disableDefaultUI: true,
  };


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

  const cctvIcon = document.createElement("img");
  cctvIcon.src = "/src/assets/cctvMapIcon.svg";

  return (
    <Map mapContainerStyle={{ width: '100%', height: '100%' }} options={mapOptions} mapTypeId={mapTypeId}>
      {Object.entries(weatherData).map(([key, data]) => (
        <AdvancedMarker
          key={key}
          position={data.position}
          title={data.name}
          children={<img src={cctvIcon.src}/>}
        />
      ))}
    </Map>
  );
}

export default Satelliteview;
