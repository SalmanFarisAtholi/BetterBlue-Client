import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from "../components/AdminLogin";
import AdminHome from "../pages/admin/AdminHome";
import AdminSidebar from "../components/AdminSidebar";
import { AdminProtectedRoutes } from "../privateRoutes/adminPrivateRoute";
import { AdminPubllicRoute } from "../publicRoutes/admiPublicRoute";

function AdminRouter() {
  return (
    <div>
      <AdminSidebar>
        <Routes>
          <Route exact path="/" element={<AdminLogin />} />

          <Route exact path="/adminside" element={<AdminHome />} />
        </Routes>
      </AdminSidebar>
    </div>
  );
}

export default AdminRouter;
