import React from "react";
import Singlefood from "../Singlefood/Singlefood";

const Breakfast = ({ foods }) => {
  const breakfasts = foods.filter((food) => food.category === "breakfast");
  return (
    <div>
      {breakfasts.map((food) => (
        <Singlefood key={food.id} food={food} />
      ))}
    </div>
  );
};

export default Breakfast;
