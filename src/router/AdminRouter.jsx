import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from "../components/AdminLogin";
import AdminHome from "../pages/admin/AdminHome";
import AdminSidebar from "../components/AdminSidebar";
import { AdminProtectedRoutes } from "../privateRoutes/adminPrivateRoute";
import { AdminPubllicRoute } from "../publicRoutes/admiPublicRoute";
import Stadium from "../components/Stadium";
import CreateStadium from "../components/CreateStadium";

function AdminRouter() {
  return (
    <div>
      <AdminSidebar>
        <Routes>
          <Route exact path="/" element={<AdminLogin />} />

          <Route exact path="/adminside" element={<AdminHome />} />
          <Route exact path="/stadium" element={<Stadium />} />
          <Route exact path="stadium/addStadium" element={<CreateStadium />} />
        </Routes>
      </AdminSidebar>
    </div>
  );
}

export default AdminRouter;
