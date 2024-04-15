import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";


ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController
);

function Barchart(){
    
    const data = {
        labels: ['', '', '', '', '', '', '', '', '', ''],
        datasets: [
          {
            backgroundColor: '#F6C943',
            data: [95, 75, 40, 57, 60, 80, 40, 57, 75, 40,],
            borderRadius: 10,
          },
          {
            backgroundColor: '#E0E0E0',
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100,],
            borderRadius: 10,
          }
        ],
      };

    const options = {
      layout: {
          padding: {left: 5, right: 5, top: 0, bottom: 0,},
          margin: {left: 0, right: 0, top: 0, bottom: 0},
      },
      maintainAspectRatio: false,
      plugins: {
        legend: {display: false,},
      },
      scales: {
        x: {grid: {display: false}, stacked:true},
        y: {grid: {display: false}}
      }
    };

    const graphStyle = {
      maxHeight: "40vh",
      maxWidth: "40vw",
      width: "100%",
      height: "100%",
    };

    return (
    <div style={graphStyle}>
        <Bar 
        className="bar_chart"data={data} 
        options={options}
        width={100}
        height={180}
        />
    </div>
    );

}

export default Barchart;