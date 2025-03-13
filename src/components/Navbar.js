import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("password");
    navigate("/login");
    window.location.reload(); // ריענון כדי לוודא שהסטייט יתעדכן
  };

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      {isAuthenticated ? (
        <>
          <Link to="/select-location">Select Location</Link>
          <Link to="/people-list">People List</Link>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
