import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Achievements from "./pages/Achievements";
import MembersPage from "./pages/MembersPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Team from "./pages/Team";
import Alumni from "./pages/Alumni";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Sponsor from "./pages/Sponsor";
import Copyright from "./pages/Copyright";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Revanta/" element={<Home />} />
        <Route path="/Revanta/members" element={<MembersPage />} />
        <Route path="/Revanta/login" element={<Login />} />
        <Route path="/Revanta/achievements" element={<Achievements />} />
        <Route path="/Revanta/register" element={<Register />} />
        <Route path="/Revanta/about" element={<About />} />
        <Route path="/Revanta/team" element={<Team />} />
        <Route path="/Revanta/alumni" element={<Alumni />} />
        <Route path="/Revanta/services" element={<Services />} />
        <Route path="/Revanta/contact" element={<Contact />} />
        <Route path="/Revanta/sponsor" element={<Sponsor />} />
        <Route path="/Revanta/copyright" element={<Copyright />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
