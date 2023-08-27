import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Achievements from "./pages/Achievements";
import MembersPage from "./pages/MembersPage";
import Login from "./pages/Login";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Revanta/" element={<Home />} />
        <Route path="/Revanta/members" element={<MembersPage />} />
        <Route path="/Revanta/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
