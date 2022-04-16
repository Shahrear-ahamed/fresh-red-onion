import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ViewFood.css";
import { ShoppingCartIcon } from "@heroicons/react/solid";

const ViewFood = ({ foods }) => {
  const [items, setItems] = useState(1);
  const param = useParams();
  const { name, desc, img, price } =
    foods.find((food) => food.id === param.id) || {};

  return (
    <div className="viewfood">
      <div className="view-food-left">
        <div className="left-desc">
          <h2>{name}</h2>
          <p>{desc}</p>
          <div className="price-button">
            <h3 className="price-title">${price}</h3>
            <div className="item-buttons">
              <button
                disabled={items <= 1 && true}
                onClick={() => setItems(items - 1)}
              >
                {" "}
                -{" "}
              </button>
              <p>{items}</p>
              <button onClick={() => setItems(items + 1)}> + </button>
            </div>
          </div>
          <button className="shopping-cart-btn">
            <ShoppingCartIcon className="cart-icon" />
            Add
          </button>
        </div>
      </div>
      <div className="view-food-right">
        <img src={img} alt={name} />
      </div>
    </div>
  );
};
export default ViewFood;
