import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SelectLocation.css";

const SelectLocation = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const navigate = useNavigate();
  const currentUser = localStorage.getItem("currentUser");

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  const handleConfirmLocation = () => {
    if (!selectedLocation) return;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.filter(user => user.username !== currentUser);
    updatedUsers.push({ username: currentUser, location: selectedLocation });
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    navigate("/people-list");
  };

  return (
    <div className="select-location-container">
      <h2>Select Your Location</h2>
      <div className="location-buttons">
        {["Building 1", "Building 2", "Coffee Shop", "Parking Lot"].map((place) => (
          <button 
            key={place} 
            className={`location-button ${selectedLocation === place ? "selected" : ""}`} 
            onClick={() => handleLocationSelect(place)}
          >
            {place}
          </button>
        ))}
      </div>
      <button onClick={handleConfirmLocation} className="confirm-button" disabled={!selectedLocation}>
        Confirm Location
      </button>
    </div>
  );
};

export default SelectLocation;
