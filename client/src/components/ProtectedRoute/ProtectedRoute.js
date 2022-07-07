import React from "react";
import { Route, Navigate } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  function hasJWT() {
    const token = localStorage.getItem("token");
    return token !== null;
  }

  return hasJWT() ? <Component {...rest} /> : <Navigate to="/login" />;
};
