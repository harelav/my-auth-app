import React from "react";
import { Link } from "react-router-dom";
import "./App.css"; // Import global styles

const Navbar = ({ isAuthenticated }) => {
  return (
    <nav className="navbar">
      <Link to="/">Login</Link>
      {isAuthenticated && <Link to="/home">Home</Link>}
    </nav>
  );
};

export default Navbar;
