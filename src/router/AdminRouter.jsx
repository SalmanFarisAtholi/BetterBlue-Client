import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from "../components/AdminLogin";
import AdminHome from "../pages/admin/AdminHome";
import AdminSidebar from "../components/AdminSidebar";
import { AdminProtectedRoutes } from "../privateRoutes/adminPrivateRoute";
import { AdminPubllicRoute } from "../publicRoutes/admiPublicRoute";
import Stadium from "../components/Stadium";
import CreateStadium from "../components/CreateStadium";
import EditStand from "../components/EditStand";
import Fixtures from "../components/Fixtures";
import NotFound from "../components/NotFound";
import AddMatch from "../components/AddMatch";


function AdminRouter() {
  return (
    <div>
      <AdminSidebar>
        <Routes>
          <Route exact path="/" element={<AdminLogin />} />
          <Route exact path="/*" element={<NotFound />} />

          <Route exact path="/adminside" element={<AdminHome />} />
          <Route exact path="/stadium" element={<Stadium />} />
          <Route exact path="stadium/addStadium" element={<CreateStadium />} />
          <Route exact path="fixtures/addMatch" element={<AddMatch />} />

          <Route exact path="/editStand/:id" element={<EditStand/>}/>
          <Route exact path="/fixtures" element={<Fixtures />} />

        </Routes>
      </AdminSidebar>
    </div>
  );
}

export default AdminRouter;
