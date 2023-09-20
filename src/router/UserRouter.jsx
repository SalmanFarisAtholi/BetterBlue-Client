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
import OnePlayer from "../components/OnePlayer";

import UserHome from "../components/UserHome";
import UserNavbar from "../components/UserNavbar";
import UserFixtures from "../components/UserFixtures";
import HeadToHead from "../components/HeadToHead";
import Ticket from "../components/Ticket";
import Checkout from "../components/Checkout";
import PaymentSucces from "../components/PaymentSucces";
import Sponsor from "../components/Sponsor";
import News from "../components/News";
import Results from "../components/Results";
import About from "../components/About";
import PlayerAndStaff from "../components/PlayerAndStaff";
import Footer from "../components/Footer";
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
              <UserNavbar />
              <Profile />
              <Footer/>
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
              <Footer/>

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
              <Footer/>

            </UserProtectedRoutes>
          }
        />
        <Route
          exact
          path="/headToHead/:id"
          element={
            <UserProtectedRoutes>
              <UserNavbar />
              <HeadToHead />
              <Footer/>

            </UserProtectedRoutes>
          }
        />
        <Route
          exact
          path="/ticket/:id"
          element={
            <UserProtectedRoutes>
              <UserNavbar />
              <Ticket />
              <Footer/>

            </UserProtectedRoutes>
          }
        />
        <Route
          exact
          path="/paymentSuccess"
          element={
            <UserProtectedRoutes>
              <UserNavbar />
              <PaymentSucces />
              <Footer/>

            </UserProtectedRoutes>
          }
        />
        <Route
          exact
          path="/news"
          element={
            <UserProtectedRoutes>
              <UserNavbar />
              <News />
              <Footer/>

            </UserProtectedRoutes>
          }
        />
        <Route
          exact
          path="/results"
          element={
            <UserProtectedRoutes>
              <UserNavbar />
              <Results />
              <Footer/>

            </UserProtectedRoutes>
          }
        />{" "}
        <Route
          exact
          path="/players"
          element={
            <UserProtectedRoutes>
              <UserNavbar />
              <PlayerAndStaff />
              <Footer/>

            </UserProtectedRoutes>
          }
        />
        <Route
          exact
          path="/about"
          element={
            <UserProtectedRoutes>
              <UserNavbar />
              <About />
              <Footer/>

            </UserProtectedRoutes>
          }
        />
        <Route
          exact
          path="/sponsors"
          element={
            <UserProtectedRoutes>
              <UserNavbar />
              <Sponsor />
              <Footer/>

            </UserProtectedRoutes>
          }
        />{" "}
        <Route
          exact
          path="/getOnePlayer/:id"
          element={
            <UserProtectedRoutes>
              <UserNavbar />
              <OnePlayer />
              <Footer/>

            </UserProtectedRoutes>
          }
        />
      </Routes>
    </>
  );
}

export default UserRouter;
