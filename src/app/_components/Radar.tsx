"use client";

import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const data = {
  labels: [
    ["UI & Styling"],
    ["Frameworks & Logic"],
    ["UX & Optimization"],
    ["Databases"],
    ["APIs & Rendering"],
    ["Routing & Integration"],
  ],
  datasets: [
    {
      label: "Skill Level",
      data: [89, 79, 84, 91, 82, 81],
      backgroundColor: "rgba(197, 78, 227, .2)",
      borderColor: "#C54EE3",
      pointBackgroundColor: "#C54EE3",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "#C54EE3",
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r: {
      min: 30,
      max: 100,
      angleLines: {
        color: "#45444B",
      },
      grid: {
        color: "#45444B",
      },
      pointLabels: {
        color: "#919191",
        font: {
          size: 14,
        },
        padding: 20,
      },
      ticks: {
        display: false,
        stepSize: 10,
        color: "#919191",
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const RadarChart: React.FC = () => {
  return (
    <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[300px] xl:h-[400px]">
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;
