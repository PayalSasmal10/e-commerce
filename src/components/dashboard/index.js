import React from "react";
import { AnalysticsEarning } from "./analyticsEarning";
import { TopProducts } from "./topProducts";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="sales">
        <div className="totalCards totalsales">
          <p>TOTAL SALES</p>
        </div>
        <div className="totalCards totalearnings">
          <p>TOTAL EARNINGS</p>
        </div>
        <div className="totalCards totalorders">
          <p>TOTAL ORDERS</p>
        </div>
      </div>
      <AnalysticsEarning />
      <TopProducts />
    </div>
  );
};

export default Dashboard;
