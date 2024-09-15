import React from 'react';
import { useLocation } from 'react-router-dom';
import Chart from './Chart'; // Import the Chart component
import SensorLineChart from './SensorLineChart';

const ChartPage = () => {
  const location = useLocation();
  const sensorData = location.state?.sensorData || []; // Retrieve sensor data

  return (
    <div>
      <h1>Sensor Data Chart</h1>
      <SensorLineChart sensorData={sensorData} />
    </div>
  );
};

export default ChartPage;

