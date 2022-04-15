import React from "react";
import Singlefood from "../Singlefood/Singlefood";

const Lunch = ({ foods }) => {
  const lunchs = foods.filter((food) => food.category === "lunch");
  return (
    <div>
      {lunchs.map((food) => (
        <Singlefood key={food.id} food={food} />
      ))}
    </div>
  );
};

export default Lunch;
