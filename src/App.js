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

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="breakfast" element={<Breakfast />} />
          <Route path="lunch" element={<Lunch />} />
          <Route path="dinner" element={<Dinner />} />
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
