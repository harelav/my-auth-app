import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const SelectLocation = () => {
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSetLocation = (e) => {
    e.preventDefault();

    if (!location.trim()) {
      setError("Please select a location");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = localStorage.getItem("currentUser");

    const updatedUsers = [...users, { username: currentUser, location }];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    navigate("/people-list");
  };

  return (
    <div className="page-container">
      <div className="box">
        <h2>Select Your Location</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSetLocation}>
          <select
            className="input-field"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          >
            <option value="">Choose a location</option>
            <option value="Amir Building">Amir Building</option>
            <option value="Dylen Building 2">Dylen Building</option>
            <option value="Palmer Building 2">Palmer Building</option>
            <option value="Cafeteria">Cafeteria</option>
            <option value="Library">Library</option>
          </select>
          <button type="submit" className="button">Join</button>
        </form>
      </div>
    </div>
  );
};

export default SelectLocation;
