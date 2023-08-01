import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRouter from "./router/UserRouter";
import AdminRouter from "./router/AdminRouter";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/*" element={<UserRouter/>}></Route>
        <Route exact path="/admin/*" element={<AdminRouter/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


