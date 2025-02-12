import { useEffect, useState } from "react";
import { getUserProfile } from "../services/auth.service.js";

import "./Dashboard.css";
const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserProfile().then((res) => setUser(res.data));
  }, []);

  return (
    <div className="dashboard">
      user ? <h1>Welcome, {user.username}!</h1> : <h1>Loading...</h1>;
    </div>
  );
};

export default Dashboard;
