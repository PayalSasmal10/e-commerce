
import { useEffect, useState } from "react";
import DATA from "../../data.json";
import "./recentOrders.css";

export const RecentOrders = () => {
    const [items, setItems] = useState(DATA);
    useEffect(() => {
        let newItems = items.sort((a, b) => {
            // if(a.date > b.date) return 1;
            // else if(a.date < b.date) return -1;
            // else return 0;
            return new Date(a.date) - new Date(b.date);
        });
        setItems(newItems.slice(0,6));
    });
    return(
        <div className="recentOrderCard">
            <h4>Recent Orders</h4>
            <div className="tableData">
                <table>
                    {/* <thead><td>Recent Orders</td></thead> */}
                    <tbody className="">
                    {items.map((val, id) => (
                        
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
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}