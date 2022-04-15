import React from "react";
import "./Singlefood.css";

const Singlefood = ({ food }) => {
  const { img, name, price, desc } = food;
  return (
    <div className="single-food">
      <img src={img} alt="" />
      <h4>{name}</h4>
      <p>{desc}</p>
      <h3>${price}</h3>
    </div>
  );
};

export default Singlefood;
