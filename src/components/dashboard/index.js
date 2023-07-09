import React from "react";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="sales">
        <div className="totalCards totalsales"><p>TOTAL SALES</p></div>
        <div className="totalCards totalearnings"><p>TOTAL EARNINGS</p></div>
        <div className="totalCards totalorders"><p>TOTAL ORDERS</p></div>
      </div>
      <div>
        <h5>Earning Analytics</h5>
      </div>
      <div>
        <h5>Top Selling Products</h5>
      </div>
    </div>
  );
};

export default Dashboard;
