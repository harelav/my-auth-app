import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username.trim()) {
      setError("נא להזין שם משתמש");
      return;
    }

    localStorage.setItem("currentUser", username);
    setIsAuthenticated(true);
    navigate("/select-location");
  };

  return (
    <div className="page-container">
      <div className="box">
        <h2> Hi! </h2>
        <p className="app-description">
          <br /> Welcome to Haifa University's Social App.
          Here, you can see which of your friends are currently on campus and join them for a coffee or a sandwich.
          We hope you enjoy the experience and strengthen your social connections!
        </p>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter your name"
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <button type="submit" className="button"> Lets Start! </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
