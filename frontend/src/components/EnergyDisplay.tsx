import React from 'react';

interface EnergyDisplayProps {
  energyConsumption: number;
}

const EnergyDisplay: React.FC<EnergyDisplayProps> = ({ energyConsumption }) => {
  return (
    <div>
      <h3>Energy Consumption</h3>
      <p>{energyConsumption.toFixed(2)} kWh</p>
    </div>
  );
};

export default EnergyDisplay;