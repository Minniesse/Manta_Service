import style from './OverviewMaps.module.css';
import React, { useState } from 'react';
import { APIProvider, Map, AdvancedMarker, InfoWindow } from "@vis.gl/react-google-maps";
import Dock from '../../components/Navbar/DockApps';
import PageBox from '../../components/pagebar/namebar';
import Datetimebar from '../../components/datebar/datetimebar';


export default function OverviewMaps() {
  //set the Map data UI and location
  const mapOptions = {
    mapId: 'd34c272a99808261',
    streetViewControl: false,
    controlSize: 24,
    center: { lat: 43.66293, lng: -79.39314 },
    zoom: 8,
    disableDefaultUI: true,
  };

  const [mapTypeId, setMapTypeId] = useState('roadmap');

  const toggleMapType = (type) => {
    setMapTypeId(prevMapTypeId => {
      if (type === prevMapTypeId) {
        return 'roadmap';
      } else {
        return type;
      }
    });
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
    <>
      <div className={style.entire}>
        <APIProvider apiKey="">
          <div className={style.top}>
            <Map mapContainerStyle={{ width: '100%', height: '100%' }} options={mapOptions} mapTypeId={mapTypeId}>
              {Object.entries(weatherData).map(([key, data]) => (
                <AdvancedMarker
                  className={style.marker}
                  key={key}
                  position={data.position}
                  title={data.name}
                  children={<img src={cctvIcon.src} className={style.locateicon} />}
                />
              ))}
            </Map>
          </div>
        </APIProvider>
        <div className={style.bottom}>
          <PageBox className={style.Left} toggleMapType={toggleMapType}/>
          <Dock className={style.dock}/>
          <Datetimebar className={style.Right}/>
        </div>
      </div>
    </>
  );
}