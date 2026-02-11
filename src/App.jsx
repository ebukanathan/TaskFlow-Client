import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";
import Profile from "./pages/Profile.jsx";
import Admindashboard from "./pages/admindashboard.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Admindashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
