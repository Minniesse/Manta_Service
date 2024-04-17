import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const LineGraph = (props) => {

  const canvasData = {
    datasets: [
      {
        borderColor: '#F6C943',
        pointRadius: 5,
        lineTension: 0.1,
        data: props.today_count,
        borderWidth: 3,
        backgroundColor: '#F6C943',
      },
      {
        borderColor: '#0073F3',
        pointRadius: 5,
        lineTension: 0.1,
        data: props.avg_count,
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
    maxHeight: "18vh",
    maxWidth: "30vw",
    width: "90%",
    height: "90%",
    borderRadius: "0.375rem",
    margin: "auto"
  };

  return (
    <div style={graphStyle}>
      <Line options={options} data={canvasData} />
    </div>
  );
};

export default LineGraph;