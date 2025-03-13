import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // אם המשתמש כבר מחובר, העבר אותו לעמוד בחירת מיקום
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setIsAuthenticated(true);
      navigate("/select-location");
    }
  }, [navigate, setIsAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      setError("Please enter a username and password");
      return;
    }

    // נשמור את שם המשתמש והסיסמה ב-localStorage (לא מאובטח, רק לצורך הדגמה)
    localStorage.setItem("currentUser", username);
    localStorage.setItem("password", password); // בד"כ לא שומרים ככה סיסמאות!

    setIsAuthenticated(true);
    navigate("/select-location");
    
  };

  return (
    <div className="page-container">
      <div className="box">
        <h2>Welcome!</h2>
        <p className="app-description">
          Welcome to Haifa University's Social App.<br />
          Here, you can see which of your friends are currently on campus and join them for a coffee or a sandwich.<br />
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
          <input
            type="password"
            placeholder="Enter your password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="button">I want to start</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
