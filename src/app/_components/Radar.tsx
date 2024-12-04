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
      backgroundColor: "rgba(240, 183, 90, .2)",
      borderColor: "#f0b65a",
      pointBackgroundColor: "#f0b65a",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "#f0b65a",
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
    <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px]">
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;
