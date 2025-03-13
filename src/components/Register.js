import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      setError("Please enter a valid username and password");
      return;
    }

    // בדיקת האם המשתמש כבר קיים
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some(user => user.username === username);

    if (userExists) {
      setError("Username already exists. Please choose a different one.");
      return;
    }

    // הוספת המשתמש החדש למערכת
    const newUser = { username, password };
    const updatedUsers = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // נשלח את המשתמש לעמוד ההתחברות
    navigate("/login");
  };

  return (
    <div className="page-container">
      <div className="box">
        <h2>Register</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Enter a username"
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter a password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="button">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
