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
        <div className="button-container">
          <Link to="/login" className="enter-button">I want to start</Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
