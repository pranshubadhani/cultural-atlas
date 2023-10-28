import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function InteractiveMap() {
  const mapCenter = [20.5937, 78.9629]; // India's approximate center
  const markerPosition = [20.5937, 78.9629]; // Sample marker position

  return (
    <div className="w-full h-96"> {/* Adjust the width and height as needed */}
      <MapContainer center={mapCenter} zoom={5} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={markerPosition}>
          <Popup>
            A sample location in India.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default InteractiveMap;
