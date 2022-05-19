import { Routes, Route } from "react-router-dom";
import { RequireAuth, FreeAuth } from "./routes.js";
import CardMovie from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import BuyTicket from "../pages/BuyTicket/index.jsx";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <FreeAuth>
            <Login />
          </FreeAuth>
        }
      />
      <Route
        path="/register"
        element={
          <FreeAuth>
            <Register />
          </FreeAuth>
        }
      />
      <Route path="/" element={<CardMovie />} />
      <Route
        path="/buy"
        element={
          <RequireAuth>
            <BuyTicket />
          </RequireAuth>
        }
      />
    </Routes>
  );
};
export default Router;
