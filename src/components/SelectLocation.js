import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SelectLocation.css";

// רשימת הבניינים עם הקואורדינטות המדויקות
const buildings = [
  { name: "Dylen Building", lat: 32.81836392473552, lon: 35.00126281033953 },
  { name: "Amir Building", lat: 32.82072601872585, lon: 34.998227298758366 },
  { name: "Coffee Shop", lat: 32.819500, lon: 35.000000 }, // ניתן לעדכן בהתאם
  { name: "Parking Lot", lat: 32.818000, lon: 34.999500 }, // ניתן לעדכן בהתאם
  { name: "New Location", lat: 32.7778304, lon: 35.0388224 } // מיקום חדש מעודכן
];

const SelectLocation = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [userLocation, setUserLocation] = useState(null);
  const navigate = useNavigate();
  const currentUser = localStorage.getItem("currentUser");

  // מזהה מיקום אוטומטית באמצעות GPS
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude, accuracy } = position.coords;
          setUserLocation({ latitude, longitude, accuracy });

          // בודק אם המשתמש קרוב לאחד הבניינים (פחות מ-50 מטר)
          const foundBuilding = buildings.find(building =>
            Math.abs(building.lat - latitude) < 0.0005 &&
            Math.abs(building.lon - longitude) < 0.0005
          );

          if (foundBuilding && foundBuilding.name !== selectedLocation) {
            setSelectedLocation(foundBuilding.name);
          }
        },
        (error) => {
          console.error("Error fetching location:", error);
        },
        { enableHighAccuracy: true, maximumAge: 5000, timeout: 5000 }
      );
    } else {
      console.error("Geolocation is not supported.");
    }
  }, [selectedLocation]);

  // מעדכן את המיקום של המשתמש ב-localStorage אם מיקום מזוהה
  useEffect(() => {
    if (selectedLocation) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const updatedUsers = users.filter(user => user.username !== currentUser);
      updatedUsers.push({ username: currentUser, location: selectedLocation });
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      alert(`You are now in: ${selectedLocation}`); // מציג הודעה למשתמש עם המיקום הנוכחי שלו
      navigate("/people-list"); // מעביר לדף רשימת האנשים
    }
  }, [selectedLocation, currentUser, navigate]);

  return (
    <div className="select-location-container">
      <h2>Detecting Your Location...</h2>
      {userLocation ? (
        <p>
          Your current location: {userLocation.latitude}, {userLocation.longitude} (±{userLocation.accuracy}m)
        </p>
      ) : (
        <p>Fetching location...</p>
      )}
      <p>{selectedLocation ? `You are in: ${selectedLocation}` : "Searching for buildings..."}</p>
    </div>
  );
};

export default SelectLocation;
