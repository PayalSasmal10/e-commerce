import React from "react";
import "./topProducts.css";

export const TopProducts = ({ items }) => {
  return (
    <div className="tableCard">
      <h5>Top Selling Products</h5>
      <table className="table">
        <thead className="tableheader">
          <tr>
            <th>PRODUCTS</th>
            <th>PRICE</th>
            <th>ORDERS</th>
            <th>STOCK</th>
            <th>AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          {items.map((val, id) => {
            if(val.orders > 20) {
              return (
                <tr key={id}>
                  <td>
                    <img
                      className="imageURL"
                      src={val.imageURL}
                      alt="productImges"
                    />
                    <span>{val.productname}</span>
                  </td>
                  <td>{val.price}</td>
                  <td>{val.orders}</td>
                  <td>{val.stock}</td>
                  <td>${val.amount}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};
