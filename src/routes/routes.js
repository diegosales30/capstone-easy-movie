import { Navigate, useLocation } from "react-router-dom";

const token = localStorage.getItem("@token") || "";

let authed = !!token;
export const RequireAuth = ({ children: Children }) => {
  let location = useLocation();

  return authed ? Children : <Navigate to={"/login"} />;
};

export const FreeAuth = ({ children: Children }) => {
  return authed ? <Navigate to={"/"} /> : Children;
};
