import React from "react";
import { Bar } from "react-chartjs-2";

const buildChartData = ({ labels, data }) => {
  return {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          stepSize: 1,
          max: 5
        },
      },
    ],
  },
  tooltips: {
    enabled: false,
  },
  legend: {
    display: false,
  },
};

const Chart = ({ data }) => {
  const chartData = buildChartData({ labels: data.labels, data: data.votes });
  return <Bar data={chartData} options={options} />;
};

export default Chart;
