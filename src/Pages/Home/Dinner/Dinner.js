import React from "react";
import Singlefood from "../Singlefood/Singlefood";

const Dinner = ({ foods }) => {
  const dinners = foods.filter((food) => food.category === "dinner");
  console.log(foods);
  return (
    <div>
      {dinners.map((food) => (
        <Singlefood key={food.id} food={food} />
      ))}
    </div>
  );
};

export default Dinner;
