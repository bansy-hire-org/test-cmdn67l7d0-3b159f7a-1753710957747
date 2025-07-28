import React, { useState, useEffect } from 'react';
import './App.css';
import Map from './components/Map';
import EnergyDisplay from './components/EnergyDisplay';
import IssueReporter from './components/IssueReporter';

function App() {
  const [riderLocation, setRiderLocation] = useState<{ lat: number, lng: number }>({ lat: 28.6139, lng: 77.2090 });
  const [energyConsumption, setEnergyConsumption] = useState(0);

  useEffect(() => {
    // Simulate rider movement
    const interval = setInterval(() => {
      setRiderLocation(prev => ({
        lat: prev.lat + (Math.random() - 0.5) * 0.001,
        lng: prev.lng + (Math.random() - 0.5) * 0.001
      }));
      setEnergyConsumption(prev => prev + Math.random() * 0.1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>EMO Energy Rider App</h1>
      <Map riderLocation={riderLocation} />
      <EnergyDisplay energyConsumption={energyConsumption} />
      <IssueReporter />
    </div>
  );
}

export default App;