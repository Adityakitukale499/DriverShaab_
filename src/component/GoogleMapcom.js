import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '80%',
  height: '400px',
  maxWidth: '1100px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

// Define an array of marker positions
const markerPositions = [
  { lat: -3.745, lng: -38.523 },
  { lat: -3.755, lng: -38.533 },
  // Add more marker positions as needed
];

function GoogleMapcom() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCssyaTuZvyZjC0GlASxCdD5CYtnn4SFvk"
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={5}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Render markers dynamically */}
      {markerPositions.map((position, index) => (
        <Marker key={index} position={position} />
      ))}
    </GoogleMap>
  ) : <></>;
}

export default React.memo(GoogleMapcom);
