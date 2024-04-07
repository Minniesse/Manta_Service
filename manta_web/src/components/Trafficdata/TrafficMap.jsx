import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Loader } from '@googlemaps/js-api-loader';

const InfoComponent = ({ info }) => (
  <div style={{ padding: '10px', color: "#000000" }}>
    <h2>Camera Info</h2>
    <p>{info}</p>
  </div>
);

const Traffic = () => {
  const googleMapRef = useRef(null);
  const infoWindowRef = useRef(null);

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
        { lat: 34.04924594193164, lng: -118.24104309082031, info: 'This is camera 1' },
      ];

      const cctvIcon = "src/assets/cctvMapIcon.svg";

      dummyData.forEach(data => {
        const marker = new google.maps.Marker({
          position: data,
          map: map,
          icon: cctvIcon,
        });

        marker.addListener('mouseover', () => {
          if (infoWindowRef.current) {
            infoWindowRef.current.close();
          }
          const infoWindowContent = document.createElement('div');
          ReactDOM.render(<InfoComponent info={data.info} />, infoWindowContent);

          infoWindowRef.current = new google.maps.InfoWindow({
            content: infoWindowContent
          });

          infoWindowRef.current.open(map, marker);
        });

        marker.addListener('mouseout', () => {
          if (infoWindowRef.current) {
            infoWindowRef.current.close();
          }
        });
      });
    });
  }, []);

  return <div ref={googleMapRef} style={{ width: '100%', height: '100%' }} />;
};

export default Traffic;
