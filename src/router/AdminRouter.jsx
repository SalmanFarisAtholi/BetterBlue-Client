import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from "../components/AdminLogin";
import AdminHome from "../pages/admin/AdminHome";
import AdminSidebar from "../components/AdminSidebar";
import { AdminProtectedRoutes } from "../privateRoutes/adminPrivateRoute";
import { AdminPubllicRoute } from "../publicRoutes/admiPublicRoute";
import Stadium from "../components/Stadium";
import CreateStadium from "../components/CreateStadium";
import AdminLayout from "../layout/AdminLayout";
import EditStand from "../components/EditStand";
import Fixtures from "../components/Fixtures";
import NotFound from "../components/NotFound";
import AddMatch from "../components/AddMatch";
import Opponents from "../components/Opponents";
import AddOpponent from "../components/AddOpponent";
import AdminNews from "../components/AdminNews";
import CreateNews from "../components/CreateNews";
import PartnerManage from "../components/PartnerManage";
import AddPartner from "../components/AddPartner";
import PlayerManage from "../components/PlayerManage";
import AddPlayer from "../components/AddPlayer";
import ResultManage from "../components/ResultManage";
import AddResult from "../components/AddResult";
import PlayerUpdate from "../components/PlayerUpdate";

function AdminRouter() {
  return (
    <div>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route exact path="/*" element={<NotFound />} />
          <Route exact path="/adminside" element={<AdminHome />} />
          <Route exact path="/stadium" element={<Stadium />} />
          <Route exact path="stadium/addStadium" element={<CreateStadium />} />
          <Route exact path="fixtures/addMatch" element={<AddMatch />} />
          <Route exact path="news/addNews" element={<CreateNews />} />
          <Route exact path="/news" element={<AdminNews />} />
          <Route exact path="/editStand/:id" element={<EditStand />} />
          <Route exact path="/fixtures" element={<Fixtures />} />
          <Route exact path="/opponent" element={<Opponents />} />
          <Route exact path="opponent/addOpponent" element={<AddOpponent />} />
          <Route exact path="/sponsor" element={<PartnerManage />} />
          <Route exact path="sponsor/addSponsor" element={<AddPartner />} />
          <Route exact path="/players" element={<PlayerManage />} />
          <Route exact path="players/addPlayer" element={<AddPlayer />} />
          <Route exact path="/results" element={<ResultManage />} />
          <Route exact path="results/addResult" element={<AddResult />} />
          <Route exact path="playerUpdate" element={<PlayerUpdate />} />
        </Route>
        <Route exact path="/" element={<AdminLogin />} />
      </Routes>
    </div>
  );
}

export default AdminRouter;
