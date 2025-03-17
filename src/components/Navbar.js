import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isAuthenticated, handleLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Home Page</Link> {}
        <div className="navbar-links">
          <Link to="/about">About</Link> {}
          <Link to="/fun-facts">Fun Facts</Link> {}
          <Link to="/people-list">Who's Here?</Link> {/* maybe do dropdown? */}
          {isAuthenticated && (
            <button className="logout-button" onClick={handleLogout}>logout</button> 
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
