import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const user = useContext(UserContext)
  console.log(user)
  function hasToken() {
    const { token } = user
    return token !== null;
  }



  return hasToken() ? <Component {...rest} /> : <Navigate to="/login" />;
};
