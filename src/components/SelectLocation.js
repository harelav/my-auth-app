import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SelectLocation.css";

// list of buildings with coordinates
const buildings = [
  { name: "Dylen Building", lat: 32.81836392473552, lon: 35.00126281033953 },
  { name: "Amir Building", lat: 32.82072601872585, lon: 34.998227298758366 },
  { name: "Coffee Shop", lat: 32.819500, lon: 35.000000 }, // need to check this one
  { name: "Parking Lot", lat: 32.818000, lon: 34.999500 }, // not sure if precise enough
  { name: "Portown Auditorium", lat: 32.82041304205983, lon: 34.9993627864871 }, 
  { name: "Hachsharat Haishuv", lat: 32.819913817339334, lon: 35.00020976698597 }, // another new one
];

const SelectLocation = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [userLocation, setUserLocation] = useState(null);
  const navigate = useNavigate();
  const currentUser = localStorage.getItem("currentUser");

  // trying to get user's location automatically
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude, accuracy } = position.coords;
          setUserLocation({ latitude, longitude, accuracy });

          // checking if user is near any known building (within ~50 meters)
          const foundBuilding = buildings.find(building =>
            Math.abs(building.lat - latitude) < 0.0005 &&
            Math.abs(building.lon - longitude) < 0.0005
          );

          if (foundBuilding && foundBuilding.name !== selectedLocation) {
            setSelectedLocation(foundBuilding.name);
          }
        },
        (error) => {
          console.error("hmm, something went wrong getting location:", error);
        },
        { enableHighAccuracy: true, maximumAge: 5000, timeout: 5000 }
      );
    } else {
      console.error("this browser is ancient... no geolocation support??");
    }
  }, [selectedLocation]);

  // update localStorage if user location is detected
  useEffect(() => {
    if (selectedLocation) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const updatedUsers = users.filter(user => user.username !== currentUser);
      updatedUsers.push({ username: currentUser, location: selectedLocation });
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      alert(`you are now in: ${selectedLocation}`); // basic but works
      navigate("/people-list"); // send user to see who's here
    }
  }, [selectedLocation, currentUser, navigate]);

  return (
    <div className="select-location-container">
      <h2>Detecting Your Location...</h2>
      {userLocation ? (
        <p>
          Your Current Location: {userLocation.latitude}, {userLocation.longitude} (±{userLocation.accuracy}m)
        </p>
      ) : (
        <p>fetching location...</p>
      )}
      <p>{selectedLocation ? `you are in: ${selectedLocation}` : "Searching for buildings..."}</p>
    </div>
  );
};

export default SelectLocation;
