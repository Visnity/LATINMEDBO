import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  location: {
    lat: number;
    lng: number;
    zoom: number;
  };
}

export const Map: React.FC<MapProps> = ({ location }) => {
  return (
    <MapContainer
      center={[location.lat, location.lng]}
      zoom={location.zoom}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[location.lat, location.lng]}>
        <Popup>
          LatinMed Central La Paz
        </Popup>
      </Marker>
    </MapContainer>
  );
};