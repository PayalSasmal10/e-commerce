import React, { useState } from "react";
import DATA from "../../data.json";

export const TopProducts = () => {
  const [items, setItems] = useState(DATA);

  return (
    <div>
      {items.map((val, id) => {
        return (
          <body>
            <table>
              <tr>
                <th>PRODUCTS</th>
                <th>PRICE</th>
                <th>ORDERS</th>
                <th>STOCK</th>
                <th>AMOUNT</th>
              </tr>
              <tr>
                <td>{val.productname}</td>
                <td>{val.price}</td>
                <td>{val.orders}</td>
                <td>{val.stock}</td>
                <td>{val.amount}</td>
              </tr>
            </table>
          </body>
        );
      })}
    </div>
  );
};
