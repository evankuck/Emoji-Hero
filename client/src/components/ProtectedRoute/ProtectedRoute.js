import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  function hasToken() {
    const token = localStorage.getItem("token");
    return token !== null;
  }

  return hasToken() ? <Component {...rest} /> : <Navigate to="/login" />;
};
