import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Header from "../header";
import Footer from "./Footer";

// Register the required components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SensorLineChart = ({ sensorData }) => {
  // Extract data for the chart
  const labels = sensorData.map((data) => data.name); // Labels for X-axis, e.g., timestamps or sensor IDs
  const humidityData = sensorData.map((data) => data.humidity);
  const mq135Data = sensorData.map((data) => data.mq135);
  const mq4Data = sensorData.map((data) => data.mq4);
  const temperatureData = sensorData.map((data) => data.temperature);

  // Chart.js data structure
  const humidityChartData = {
    labels,
    datasets: [
      {
        label: "Humidity (%)",
        data: humidityData,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  const mq135ChartData = {
    labels,
    datasets: [
      {
        label: "MQ135",
        data: mq135Data,
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        fill: true,
      },
    ],
  };

  const mq4ChartData = {
    labels,
    datasets: [
      {
        label: "MQ4",
        data: mq4Data,
        borderColor: "rgba(255, 159, 64, 1)",
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        fill: true,
      },
    ],
  };

  const temperatureChartData = {
    labels,
    datasets: [
      {
        label: "Temperature (°C)",
        data: temperatureData,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
    ],
  };

  // Chart.js options for configuration
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Sensor Data Line Chart",
      },
    },
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-14 space-y-12">
        <div className="w-full max-w-4xl">
          <h2 className="text-xl font-semibold mb-4">Humidity Line Chart</h2>
          <Line data={humidityChartData} options={options} />
        </div>

        <div className="w-full max-w-4xl">
          <h2 className="text-xl font-semibold mb-4">MQ135 Line Chart</h2>
          <Line data={mq135ChartData} options={options} />
        </div>

        <div className="w-full max-w-4xl">
          <h2 className="text-xl font-semibold mb-4">MQ4 Line Chart</h2>
          <Line data={mq4ChartData} options={options} />
        </div>

        <div className="w-full max-w-4xl">
          <h2 className="text-xl font-semibold mb-4">Temperature Line Chart</h2>
          <Line data={temperatureChartData} options={options} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SensorLineChart;
