import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";
import campusImage from "../assets/campus-image.jpg"; // Ensure correct path

const Welcome = () => {
  return (
    <div className="welcome-container">
      <img src={campusImage} alt="Campus View" className="background-image" />
      <div className="overlay">
        <h1>Welcome to the Haifa University City Campus</h1>
        <p className="app-description">
          Welcome to Haifa University's Social App.<br />
          Here, you can see which of your friends are currently on campus and join them for a coffee or a sandwich.<br />
          We hope you enjoy the experience and strengthen your social connections!
        </p>
        <div className="button-container">
          <Link to="/login" className="button">Login</Link>
          <Link to="/register" className="button">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
