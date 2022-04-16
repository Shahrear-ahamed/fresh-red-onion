import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Cart from "./Pages/cart/cart";
import Login from "./Pages/Login/Login";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import SignUp from "./Pages/SignUp/SignUp";
import Footer from "./Pages/Shared/Footer/Footer";
import Dinner from "./Pages/Home/Dinner/Dinner";
import Breakfast from "./Pages/Home/Breakfast/Breakfast";
import Lunch from "./Pages/Home/Lunch/Lunch";
import { useEffect, useState } from "react";
import Placeorder from "./Pages/Home/Placeorder/Placeorder";
import ViewFood from "./Pages/Home/ViewFood/ViewFood";

function App() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("foods.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Lunch foods={foods} />} />
          <Route path="breakfast" element={<Breakfast foods={foods} />} />
          <Route path="lunch" element={<Lunch foods={foods} />} />
          <Route path="dinner" element={<Dinner foods={foods} />} />
          <Route path="placeorder" element={<Placeorder />} />
          <Route path="food/:id" element={<ViewFood foods={foods}/>} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
