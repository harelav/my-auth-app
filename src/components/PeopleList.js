import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PeopleList.css";
import building1Image from "../assets/Building1.jpg"; 
import building2Image from "../assets/Building2.jpg";
import coffeeShopImage from "../assets/Coffe_Shop.jpg";
import parkingLotImage from "../assets/Parking_Lot.jpeg";

const PeopleList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const currentUser = localStorage.getItem("currentUser");

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const handleExit = () => {
    const updatedUsers = users.filter(user => user.username !== currentUser);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  // קביעת תמונת הרקע לפי המיקום
  const currentUserData = users.find(user => user.username === currentUser);
  const location = currentUserData ? currentUserData.location : "";

  const getBackgroundImage = () => {
    switch (location) {
      case "Building 1":
        return building1Image;
      case "Building 2":
        return building2Image;
      case "Coffee Shop":
        return coffeeShopImage;
      case "Parking Lot":
        return parkingLotImage;
      default:
        return null;
    }
  };

  return (
    <div 
      className="people-list-container" 
      style={{ backgroundImage: getBackgroundImage() ? `url(${getBackgroundImage()})` : "none" }}
    >
      <div className="overlay">
        <h2>People in {location}</h2>
        {users.length > 0 ? (
          <ul className="people-list">
            {users
              .filter(user => user.location === location)
              .map((user, index) => (
                <li key={index}>{user.username}</li>
            ))}
          </ul>
        ) : (
          <p>No one is here yet.</p>
        )}
        <button onClick={handleExit} className="button">Exit</button>
      </div>
    </div>
  );
};

export default PeopleList;
