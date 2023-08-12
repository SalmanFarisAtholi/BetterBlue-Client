import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import { Outlet } from "react-router-dom";
function AdminLayout() {
  return (
      <AdminSidebar>
        <Outlet />
      </AdminSidebar>
  );
}

export default AdminLayout;
