import React from "react";
import { useNavigate } from "react-router-dom";
import "./Singlefood.css";

const Singlefood = ({ food }) => {
  const { id, img, name, price, desc } = food;
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/food/${id}`)} className="single-food">
      <img src={img} alt="" />
      <h4>{name}</h4>
      <p>{desc}</p>
      <h3>${price}</h3>
    </div>
  );
};

export default Singlefood;
