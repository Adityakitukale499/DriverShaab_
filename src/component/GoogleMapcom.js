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

const markerPositions = [
  { name: 'Kolkata', location: { lat: 22.520039261798022, lng: 88.38308769624192 } },
  { name: 'mumbai', location: { lat: 19.0760, lng: 72.8777 } },
  { name: 'pune', location: { lat: 18.516726, lng: 73.856255 } },
  { name: 'delhi', location: { lat: 28.7041, lng: 77.1025 } },
  { name: 'bangalore', location: { lat: 12.971599, lng: 77.594566 } },
  { name: 'jaipur', location: { lat: 26.922070, lng: 75.778885 } },
  { name: 'chandigarh ', location: { lat: 30.7333, lng: 76.7794 } },
  { name: 'kanpur ', location: { lat: 26.449923, lng: 80.331871 } },
  { name: 'Lucknow', location: { lat: 26.850000, lng: 80.949997} },
  { name: 'Hyderabad ', location: { lat: 17.366, lng: 78.476 } },
  { name: 'Chennai ', location: { lat: 13.0827, lng: 80.2707 } },
  { name: 'Cuttack', location: { lat: 20.4625, lng: 85.8830 } },
  { name: 'Aurangabad', location: { lat: 19.8762, lng: 75.3433 } },
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
