import React, { useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer, TrafficLayer, Marker } from '@react-google-maps/api';

const MapComponent = () => {
  const mapRef = useRef(null);
  const directionsServiceRef = useRef(null);
  const directionsDisplayRef = useRef(null);
  const currentRouteRef = useRef(null);
  const trafficLayerRef = useRef(null);

  useEffect(() => {
    initMap();
  }, []);

  const initMap = () => {
    const mapOptions = {
      center: { lat: 30.267153, lng: -97.743057 },
      zoom: 12,
      disableDefaultUI: true,
      styles: [
        {
          featureType: "all",
          elementType: "all",
          stylers: [
            { invert_lightness: true },
            { saturation: -100 },
            { lightness: 0 },
            { visibility: "on" },
          ],
        },
      ],
    };

    mapRef.current = new window.google.maps.Map(document.getElementById("map"), mapOptions);

    const legendContainer = document.getElementById("legend");
    mapRef.current.controls[window.google.maps.ControlPosition.LEFT_BOTTOM].push(legendContainer);

    trafficLayerRef.current = new window.google.maps.TrafficLayer();
    trafficLayerRef.current.setMap(mapRef.current);

    directionsServiceRef.current = new window.google.maps.DirectionsService();
    directionsDisplayRef.current = new window.google.maps.DirectionsRenderer();
    directionsDisplayRef.current.setMap(mapRef.current);
  };

  return (
    <div>
      <div id="map" style={{ height: '83.5vh' }}></div>
    </div>
  );
};

const Traffic = () => {
  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap>
        <MapComponent />
      </GoogleMap>
    </LoadScript>
  );
};

export default Traffic;