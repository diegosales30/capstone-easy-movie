import { Navigate, useLocation } from "react-router-dom";
export const RequireAuth = ({ children: Children }) => {
  const token = localStorage.getItem("@token") || "";
  let authed = !!token;
  return authed ? Children : <Navigate to={"/login"} />;
};
export const FreeAuth = ({ children: Children }) => {
  const token = localStorage.getItem("@token") || "";
  let authed = !!token;
  return authed ? <Navigate to={"/"} /> : Children;
};
