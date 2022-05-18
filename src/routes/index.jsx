import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import BuyTicket from "../pages/BuyTicket";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/buyticket" element={<BuyTicket/>}></Route>
    </Routes>
  );
};

export default Rotas;
