import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";
import Profile from "./pages/Profile.jsx";
import Admindashboard from "./pages/admindashboard.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import Layout from "./components/Layout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Layout />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Admindashboard />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
