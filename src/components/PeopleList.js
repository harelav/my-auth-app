import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PeopleList.css";

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

  // מוצא את המיקום הנוכחי של המשתמש
  const currentUserData = users.find(user => user.username === currentUser);
  const location = currentUserData ? currentUserData.location : "";

  return (
    <div className="people-list-container">
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
  );
};

export default PeopleList;
