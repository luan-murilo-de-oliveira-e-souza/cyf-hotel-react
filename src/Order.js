import RestaurantButton from "./RestaurantButton";
import { useState } from "react";

function Order({ orderType }) {
  const [order, setOrders] = useState(0);

  //Add item
  const addOrder = () => {
    setOrders(order + 1);
  };

  //Withdraw item
  const removeOrder = () => {
    if (order >= 1) {
      setOrders(order - 1);
    }
  };

  return (
    <li>
      {/* //Show me the item and quantity of each item */}
      {orderType}: <span>{order}</span>
      <RestaurantButton addOrder={addOrder} removeOrder={removeOrder} />
    </li>
  );
}
export default Order;
