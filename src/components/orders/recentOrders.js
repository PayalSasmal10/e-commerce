
import DATA from "../../data.json";
import "./recentOrders.css";

export const RecentOrders = () => {
    return(
        <div className="recentOrderCard">
            <h4>Recent Orders</h4>
            <div>
                <table>
                    <thead></thead>
                    <tbody>
                    {DATA.map((val, id) => {
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
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}