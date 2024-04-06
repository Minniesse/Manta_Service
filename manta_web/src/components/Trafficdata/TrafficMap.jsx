import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const Traffic = () => {
  const googleMapRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: '',
      version: 'weekly',
    });

    loader.load().then(() => {
      const google = window.google;
      const map = new google.maps.Map(googleMapRef.current, {
        zoom: 13,
        center: { lat: 34.04924594193164, lng: -118.24104309082031 },
      });

      const trafficLayer = new google.maps.TrafficLayer();
      trafficLayer.setMap(map);
    });
  }, []);

  return <div ref={googleMapRef} style={{ width: '100%', height: '100%' }} />;
};

export default Traffic;
