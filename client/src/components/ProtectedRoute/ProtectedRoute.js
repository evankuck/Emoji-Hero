import React from "react";
import { Route, Navigate } from "react-router-dom";

export const ProtectedRoute = ({ element: Component, ...rest }) => {
  function hasJWT() {
    const token = localStorage.getItem("token");
    return token !== null;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        hasJWT() ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
};
