import React, { useState, useEffect } from "react";
import api from "../api/axios.js";
import { logout } from "../api/Auth.js";
import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar.jsx";
import MainBoard from "../components/MainBoard.jsx";

function Profile() {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("projects");

  const navigate = useNavigate();

  // const handleLogout = async () => {
  //   // await logout();
  //   navigate("/");
  // };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/auth/userprofile", {
          withCredentials: true,
        });

        // if (!res) {
        //   console.log("no data");
        // }

        setUser(res.data.user);

        // console.log(res.data.user);
        if (res) {
          setLoading(true);
        }
      } catch (error) {
        console.log(error, "not working oo");
        navigate("/login");
      }
    };

    fetchUser();
  }, [navigate]);

  return (
    <div className="flex min-h-screen ">
      {/* <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        handleLogout={handleLogout}
      /> */}
      {loading ? (
        <h4>
          <h2>Welcome to your profile, {user.name}!</h2>
          <MainBoard activeTab={activeTab} user={user} />
        </h4>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Profile;
