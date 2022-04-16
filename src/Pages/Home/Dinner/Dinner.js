import React from "react";
import { useNavigate } from "react-router-dom";
import Singlefood from "../Singlefood/Singlefood";

const Dinner = ({ foods }) => {
  const navigate = useNavigate();
  const dinners = foods.filter((food) => food.category === "dinner");
  return (
    <div className="food-detail">
      <div className="single-product">
        {dinners.map((food) => (
          <Singlefood key={food.id} food={food} />
        ))}
      </div>
      <button className="checkout" onClick={() => navigate("/placeorder")}>
        CheckOut Your Food
      </button>
    </div>
  );
};

export default Dinner;
