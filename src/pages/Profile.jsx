import React, { useState, useEffect } from "react";
import api from "../api/axios.js";

import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import MainBoard from "../components/MainBoard.jsx";

function Profile() {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("projects");

  const navigate = useNavigate;

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
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <MainBoard activeTab={activeTab} user={user} />
    </div>
  );
}

export default Profile;
