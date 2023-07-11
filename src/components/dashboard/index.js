import React, { useEffect, useState } from "react";
import { AnalysticsEarning } from "./analyticsEarning";
import { TopProducts } from "./topProducts";
import DATA from "../../data.json";
import "./dashboard.css";

const Dashboard = ({setNavActive}) => {
  const [items] = useState(DATA);
  const [totalSales, setTotalSales] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);

  console.log("items", items);

  useEffect(() => {
    if (items.length !== 0) {
      let deItems = [...items];
      let amounts = deItems.map(
        (item) => item.amount * item.orders * item.stock
      );
      let totalAmount = amounts.reduce((intVal, amount) => amount + intVal, 0);
      let earnings = deItems.map((item) => item.amount * item.orders);
      let totalEarning = earnings.reduce((initVal, earns) => initVal + earns);
      let orders = deItems.map((item) => item.orders * 1);

      let totalOrder = orders.reduce((initVal, item) => initVal + item);
      setTotalSales(totalAmount);
      setTotalEarnings(totalEarning);
      setTotalOrders(totalOrder);
    }
  }, []);
  // totalSales();
  // console.log(totalSales);
  return (
    <main className="dashboard">
      <div className="header">
        <h1>Dashboard</h1>
        <div className="burger" onClick={() => setNavActive("active")}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="sales">
        <div className="totalCards totalsales">
          <span>📈 TOTAL SALES</span>
          <br />
          <span>${totalSales}</span>
        </div>
        <div className="totalCards totalearnings">
          <span>💰TOTAL EARNINGS</span>
          <br />
          <span>${totalEarnings}</span>
        </div>
        <div className="totalCards totalorders">
          <span>🛒TOTAL ORDERS</span>
          <br />
          <span>{totalOrders} k</span>
        </div>
      </div>
      <AnalysticsEarning />
      <TopProducts items={items} />
    </main>
  );
};

export default Dashboard;
