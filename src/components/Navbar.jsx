import { Link } from "react-router-dom";
import { logout } from "../services/auth.service.js";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/admin">Admin</Link>
      <button onClick={logout}>Logout</button>
    </nav>
  );
};

export default Navbar;
