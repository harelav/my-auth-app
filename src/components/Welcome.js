import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";
import campusImage from "../assets/campus-image.jpg";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <img src={campusImage} alt="Campus View" className="background-image" />

      <div className="content">
        <h1 className="main-title">Welcome to the Haifa University City Campus</h1>
        <p className="description">
          Welcome to haifa university's social app.<br />
          Here, you can see which of your friends are currently on campus and join them for a coffee or a sandwich.<br />
          We hope you enjoy the experience and strengthen your social connections!
        </p>

        <div className="button-container">
          <Link to="/enter-name" className="enter-button">I'm here!</Link> {}
          <Link to="/about" className="about-button">About the campus</Link> {}
          <Link to="/fun-facts" className="extra-button">Fun Facts About The University</Link> {}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
