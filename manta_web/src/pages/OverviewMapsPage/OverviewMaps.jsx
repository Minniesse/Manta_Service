import style from './OverviewMaps.module.css';
import React, { useState } from 'react';
import { APIProvider, Map, AdvancedMarker, InfoWindow } from "@vis.gl/react-google-maps";
import Dock from '../../components/Navbar/DockApps';
import PageBox from '../../components/pagebar/namebar';
import Datetimebar from '../../components/datebar/datetimebar';
import Satelliteview from '../../components/normalMap/sateliteMap';
import Traffic from '../../components/Trafficdata/TrafficMap';


export default function OverviewMaps() {

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
  

  return (
    <>
      <div className={style.entire}>
        <APIProvider apiKey="">
          <div className={style.top}>
          {/* <Satelliteview mapTypeId={mapTypeId} /> */}
          <Traffic />
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