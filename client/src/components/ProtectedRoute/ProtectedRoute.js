import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const user = useContext(UserContext);
  console.log(user);
  function hasToken() {
    if (!user) {
      return false; // if user is falsy, return false early to exit function
    } else {
      const { token } = user;
      return token ? true : false; // return true or false depending on whether the token has a truthy value or not.
    }
  }

  return hasToken() ? <Component {...rest} /> : <Navigate to="/login" />;
};
