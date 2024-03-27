import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '80%',
  height: '400px',
  maxWidth: '1100px'
};

const center = {
  lat: 22.520039261798022,
  lng: 88.38308769624192
};

// Define an array of marker positions
const markerPositions = [
  { name: 'Kolkata', location: { lat: 22.520039261798022, lng: 88.38308769624192 } },
  { name: 'mumbai', location: { lat: 19.0760, lng: 72.8777 } },
  { name: 'pune', location: { lat: 18.516726, lng: 73.856255 } },
  { name: 'nagpur', location: { lat: 21.1458, lng: 79.0882 } },
];

function GoogleMapcom() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCssyaTuZvyZjC0GlASxCdD5CYtnn4SFvk"
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={4}
      // mapTypeId="satellite"
      defaultZoom={1}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {markerPositions.map((position, index) => {
        return <div key={Math.random}>
          <Marker position={position.location}/>
        </div>
      })}
    </GoogleMap>
  ) : <></>;
}

export default React.memo(GoogleMapcom);
