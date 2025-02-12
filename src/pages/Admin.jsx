import { useEffect, useState } from "react";
import { getUserProfile } from "../services/auth.service.js";
import { Navigate } from "react-router-dom";
import "./Admin.css";

const Admin = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserProfile().then((res) => setUser(res.data));
  }, []);

  if (!user) return <h1>Loading...</h1>;
  if (user.role !== "admin") return <Navigate to="/dashboard" />;

  return (
    <div className="admin">
      <h1>Welcome, Admin {user.username}!</h1>
    </div>
  );
};

export default Admin;
