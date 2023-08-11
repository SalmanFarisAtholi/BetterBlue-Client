import React from "react";
import { Navigate } from "react-router-dom";

export const AdminPubllicRoute = (props) => {
  if (localStorage.getItem("admintoken")) {
    return <Navigate to="/profile" />;
  } else {
    return props.children;
  }
};
