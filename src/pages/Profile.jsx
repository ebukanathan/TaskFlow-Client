import React, { useState, useEffect } from "react";
import api from "../api/axios.js";
import { logout } from "../api/Auth.js";
import { useNavigate } from "react-router-dom";
import { useProfile } from "../features/auth/useProfile";

import Sidebar from "../components/Sidebar.jsx";
import MainBoard from "../components/MainBoard.jsx";

function Profile() {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("projects");

  // const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const res = await api.get("/auth/userprofile", {
  //         withCredentials: true,
  //       });

  //       setUser(res.data.user);

  //       if (res) {
  //         setLoading(true);
  //       }
  //     } catch (error) {
  //       console.log(error, "not working oo");
  //       navigate("/login");
  //     }
  //   };

  //   fetchUser();
  // }, [navigate]);

  const { data, isLoading, isError } = useProfile();
  console.log(data);

  return (
    <div className="flex min-h-screen ">
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      {/* <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} /> */}
      {/* {loading ? (
        <h4>
          <h2>Welcome to your profile, {data.name}!</h2>
          <MainBoard activeTab={activeTab} user={data} />
        </h4>
      ) : (
        <h1>Loading...</h1>
      )} */}
      {data && (
        <h4>
          <h2>Welcome to your profile, {data.name}</h2>
          <MainBoard activeTab={activeTab} user={data} />
        </h4>
      )}
    </div>
  );
}

export default Profile;
