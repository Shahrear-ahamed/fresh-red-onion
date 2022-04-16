import React from "react";
import { useNavigate } from "react-router-dom";
import Singlefood from "../Singlefood/Singlefood";

const Breakfast = ({ foods }) => {
  const navigate = useNavigate();
  const breakfasts = foods.filter((food) => food.category === "breakfast");
  return (
    <div className="food-detail">
      <div className="single-product">
        {breakfasts.map((food) => (
          <Singlefood key={food.id} food={food} />
        ))}
      </div>
      <button className="checkout" onClick={() => navigate("/placeorder")}>
        CheckOut Your Food
      </button>
    </div>
  );
};

export default Breakfast;
