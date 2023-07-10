import { CategoryScale } from "chart.js";
import { Chart } from "chart.js/auto";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import DATA from "../../data.json";
import "./analyticsEarning.css";

Chart.register(CategoryScale);

export const AnalysticsEarning = () => {
  const [chartData] = useState({
    labels: DATA.map((data) => data.month),
    datasets: [
      {
        label: "Earning",
        data: DATA.map((data) => data.amount),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "&quot;#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div className="analyticsCard">
      <h4>Earnings Analytics</h4>
      <Line className="lineChart"
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};
export default AnalysticsEarning;
