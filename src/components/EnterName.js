import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EnterName.css";

const EnterName = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleEnter = () => {
    if (username.trim().length < 3) {
      alert("please enter a name with at least 3 characters."); // not sure if 3 characters is enough
      return;
    }

    // saving username directly in local storage
    localStorage.setItem("currentUser", username); 

    // moving to location selection
    navigate("/select-location"); 
  };

  return (
    <div className="enter-name-container">
      <h1>Enter Your Name</h1> {/* should change to bolder? */}
      <input
        type="text"
        placeholder="Your Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="name-input"
      />
      <button onClick={handleEnter} className="continue-button">continue</button> 
      {/* should do bigger? */}
    </div>
  );
};

export default EnterName;
