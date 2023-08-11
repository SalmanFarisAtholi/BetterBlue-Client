import React from "react";
import { Navigate } from "react-router-dom";

export const UserPubllicRoute = (props) => {
  if (localStorage.getItem("token")) {
    return <Navigate to="/profile" />;
  } else {
    return props.children;
  }
};
