import React from "react";
import { Route, Routes } from "react-router-dom";
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
import UserHome from "../components/UserHome";
import UserNavbar from "../components/UserNavbar";
import UserFixtures from "../components/UserFixtures";
import HeadToHead from "../components/HeadToHead";
import Ticket from "../components/Ticket";
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
        <Route
          exact
          path="/home"
          element={
            <UserProtectedRoutes>
              <UserNavbar />
              <UserHome />
            </UserProtectedRoutes>
          }
        />
        <Route
          exact
          path="/fixtures"
          element={
            <UserProtectedRoutes>
              <UserNavbar />
              <UserFixtures />
            </UserProtectedRoutes>
          }
        />
        <Route
          exact
          path="/headToHead"
          element={
            <UserProtectedRoutes>
              <UserNavbar />
              <HeadToHead />
            </UserProtectedRoutes>
          }
        />
        <Route
          exact
          path="/ticket"
          element={
            <UserProtectedRoutes>
              <UserNavbar />
              <Ticket />
            </UserProtectedRoutes>
          }
        />
      </Routes>
    </>
  );
}

export default UserRouter;
