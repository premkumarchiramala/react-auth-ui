import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [user, setUser] =
    useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token =
        localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/auth/profile",
        {
          headers: {
            authorization: token,
          },
        }
      );

      setUser(res.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      {user && (
        <div className="user-box">
          <h2>
            Welcome {user.id}
          </h2>

          <p>
            JWT Authentication
            Success
          </p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;