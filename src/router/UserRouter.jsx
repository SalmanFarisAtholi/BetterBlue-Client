import React from "react";
import {  Route, Routes } from "react-router-dom";
import { UserProtectedRoutes } from "../privateRoutes/userPrivateRoutes";
import { UserPubllicRoute } from "../publicRoutes/userPublicRoutes";
import Profile from "../components/Profile";
// import ForgotPassword from "./components/ForgotPassword";
import NotFound from "../components/NotFound";
// import Password from "./components/Password";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
// import Reset from "./components/Reset";
import Otp from "../components/Otp";
import UserNavbar from "../components/UserNavbar";
function UserRouter() {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <UserPubllicRoute>
              <Login />
            </UserPubllicRoute>
          }
        />
        <Route
          exact
          path="/login"
          element={
            <UserPubllicRoute>
              <Login />
            </UserPubllicRoute>
          }
        />

        <Route exact path="/*" element={<NotFound />} />
        <Route
          exact
          path="/profile"
          element={
            <UserProtectedRoutes>
              <Profile />
            </UserProtectedRoutes>
          }
        />
        <Route
          exact
          path="/signup"
          element={
            <UserPubllicRoute>
              <SignUp />
            </UserPubllicRoute>
          }
        />
        <Route
          exact
          path="/otp"
          element={
            <UserPubllicRoute>
              <Otp />
            </UserPubllicRoute>
          }
        />
      </Routes>
    </>
  );
}

export default UserRouter;
