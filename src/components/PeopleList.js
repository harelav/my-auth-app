import React, { useState, useEffect } from "react";
import "./PeopleList.css";

const PeopleList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // getting user list from local storage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []); // should add dependencies here?

  return (
    <div className="people-list-container">
      <h1>who's here?</h1> {}
      <p className="subtitle">See who’s currently on campus and where they are.</p>
      
      {users.length === 0 ? (
        <p className="no-users">Hmm, looks like no one is checked in yet.</p> 
      ) : (
        <div className="people-grid">
          {users.map((user, index) => (
            <div key={index} className="user-card">
              <div className="user-icon">👤</div> {/* maybe change icons? */}
              <p className="username">{user.username}</p>
              <p className="location">🏫 {user.location}</p> {}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PeopleList;
