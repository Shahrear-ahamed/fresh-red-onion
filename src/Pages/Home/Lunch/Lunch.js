import React from "react";
import { useNavigate } from "react-router-dom";
import Singlefood from "../Singlefood/Singlefood";

const Lunch = ({ foods }) => {
  const navigate = useNavigate();
  const lunchs = foods.filter((food) => food.category === "lunch");
  return (
    <div className="food-detail">
      <div className="single-product">
        {lunchs.map((food) => (
          <Singlefood key={food.id} food={food} />
        ))}
      </div>
      <button className="checkout" onClick={() => navigate("/placeorder")}>
        CheckOut Your Food
      </button>
    </div>
  );
};

export default Lunch;
