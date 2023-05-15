import React from "react";

export default function RestaurantButton({ addOrder, removeOrder }) {
  return (
    <div>
      <button
        className="btn btn-primary btn-margin btn-margin"
        onClick={addOrder}
      >
        +
      </button>
      <button className="btn btn-primary btn-margin" onClick={removeOrder}>
        -
      </button>
    </div>
  );
}
