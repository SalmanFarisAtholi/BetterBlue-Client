import React from "react";
import { Navigate } from "react-router-dom";

export const AdminProtectedRoutes = (props) => {
  if (localStorage.getItem("admintoken")) {
    return props.children;
  } else {
    return <Navigate to="/admin" />;
  }
};

//  UserProtectedRoutes;
