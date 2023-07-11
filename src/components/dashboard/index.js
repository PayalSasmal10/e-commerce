import React, { useEffect, useState } from "react";
import { AnalysticsEarning } from "./analyticsEarning";
import { TopProducts } from "./topProducts";
import DATA from "../../data.json";
import "./dashboard.css";

const Dashboard = () => {
  const [items] = useState(DATA);
  const [totalSales, setTotalSales] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);

  useEffect(() => {
    if (items.length !== 0) {
      let deItems = [...items];
      let amounts = deItems.map((item) => item.amount * item.orders * item.stock);
      console.log(amounts);
      let totalAmount = amounts.reduce((intVal, amount) => amount + intVal, 0);
      let earnings = deItems.map((item) => item.amount * item.orders);
      let totalEarning = earnings.reduce((initVal, earns) => initVal + earns);
      let orders = deItems.map((item) => item.orders * 1);
      console.log(orders);

      let totalOrder = orders.reduce((initVal, item) => initVal + item);
      // console.log(totalOrder);
      setTotalSales(totalAmount);
      setTotalEarnings(totalEarning);
      setTotalOrders(totalOrder);

    }

  }, []);
  // totalSales();
  // console.log(totalSales);
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="sales">
        <div className="totalCards totalsales">
          <p className="val">📈 TOTAL SALES</p>
          <span className="">${totalSales}</span>
        </div>
        <div className="totalCards totalearnings">
          <p className="val">💰TOTAL EARNINGS</p>
          <span className="">${totalEarnings}</span>
        </div>
        <div className="totalCards totalorders">
          <p className="val">🛒TOTAL ORDERS</p>
          <span className="">{totalOrders} k</span>
        </div>
      </div>
      <AnalysticsEarning />
      <TopProducts items={items} />
    </div>
  );
};

export default Dashboard;
