import { CategoryScale, Chart } from "chart.js";
import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import DATA from "../../data.json";
import "./modeofOrders.css";
import { RecentOrders } from "./recentOrders";

export const ModeOfOrder = () => {
  Chart.register(CategoryScale);

  const [paymentData] = useState({
    datasets: [
      {
        label: "",
        data: [60, 30],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "&quot;#ecf0f1",
          //   "#50AF95",
          //   "#f3ba2f",
          //   "#2a71d0",
        ],
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div className="orderCards">
      <div className="moodeOfCardORder">
        <h4>Mode of Order</h4>
        <div>
          <Pie
            data={paymentData}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "",
                },
              },
            }}
          />
        </div>
      </div>

      <RecentOrders />
    </div>
  );
};
