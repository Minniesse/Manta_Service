import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const Traffic = () => {
  const googleMapRef = useRef(null);
  const [markers, setMarkers] = useState([]);

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

      const dummyData = [
        { lat: 34.04924594193164, lng: -118.24104309082031 },
        { lat: 34.05924594193165, lng: -118.25104309082032 },
        { lat: 34.06924594193166, lng: -118.26104309082033 },
        { lat: 34.07924594193167, lng: -118.27104309082034 },
      ];

      const cctvIcon ="src/assets/cctvMapIcon.svg"

      const newMarkers = dummyData.map(data => new google.maps.Marker({
        position: data,
        map: map,
        icon: cctvIcon,
      }));

      setMarkers(newMarkers);
    });
  }, []);

  useEffect(() => {
    markers.forEach(marker => {
      marker.addListener('click', () => {
        console.log('Marker was clicked!');
      });
    });
  }, [markers]);

  return <div ref={googleMapRef} style={{ width: '100%', height: '100%' }} />;
};

export default Traffic;