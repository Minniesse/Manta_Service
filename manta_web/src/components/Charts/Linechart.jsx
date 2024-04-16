import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const LineGraph = () => {
  const sampleData = [43, 40, 50, 40, 70];
  const sampleData2 = [0, 20, 45, 70, 70];

  const canvasData = {
    datasets: [
      {
        borderColor: '#F6C943',
        pointRadius: 5,
        lineTension: 0.1,
        data: sampleData,
        borderWidth: 3,
        backgroundColor: '#F6C943',
      },
      {
        borderColor: '#0073F3',
        pointRadius: 5,
        lineTension: 0.1,
        data: sampleData2,
        borderWidth: 3,
        backgroundColor: '#0073F3',
      }
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: true,
        },
        labels: [1, 2, 3, 4, 5],
      },
      y: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        min: 0,
        max: 80,
        ticks: {
          stepSize: 10,
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  const graphStyle = {
    maxHeight: "15vh",
    maxWidth: "25vw",
    width: "100%",
    height: "100%",
    borderRadius: "0.375rem",
    padding: "0.5rem",
  };

  return (
    <div style={graphStyle}>
      <Line options={options} data={canvasData} />
    </div>
  );
};

export default LineGraph;