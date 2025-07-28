import React from 'react';

interface MapProps {
  riderLocation: { lat: number, lng: number };
}

const Map: React.FC<MapProps> = ({ riderLocation }) => {
  // Replace with actual map integration (e.g., Google Maps API)
  return (
    <div style={{ width: '500px', height: '300px', border: '1px solid black' }}>
      <h3>Map</h3>
      <p>Rider Location: Lat: {riderLocation.lat.toFixed(4)}, Lng: {riderLocation.lng.toFixed(4)}</p>
      {/* Placeholder for map integration */}
    </div>
  );
};

export default Map;