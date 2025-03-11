import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

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

  return (
    <div className="page-container">
      <div className="box">
        <h2>People in Your Location</h2>
        {users.length > 0 ? (
          <ul className="people-list">
            {users.map((user, index) => (
              <li key={index}>{user.username} - {user.location}</li>
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
