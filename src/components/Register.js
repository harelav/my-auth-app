import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Using the same CSS as Login

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Check if the user already exists
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.some((user) => user.username === username);

    if (userExists) {
      setError("Username already exists!");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Add the new user and save to localStorage
    const newUser = { username, password };
    localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));

    alert("Registration successful! Please log in.");
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Sign Up</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="input-field"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-button">Register</button>
        </form>
        <p>Already have an account? <span onClick={() => navigate("/")} className="link">Login</span></p>
      </div>
    </div>
  );
};

export default Register;
