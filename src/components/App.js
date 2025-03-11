import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import Login from "./Login";
import SelectLocation from "./SelectLocation";
import PeopleList from "./PeopleList";
import Navbar from "./Navbar";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const removeUserOnExit = () => {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const currentUser = localStorage.getItem("currentUser");

      // מסנן את המשתמש שסגר את הדפדפן
      const updatedUsers = users.filter(user => user.username !== currentUser);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    };

    // מאזין לאירוע של סגירת החלון
    window.addEventListener("beforeunload", removeUserOnExit);
    
    return () => window.removeEventListener("beforeunload", removeUserOnExit);
  }, []);

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/select-location" element={<SelectLocation />} />
        <Route path="/people-list" element={<PeopleList />} />
      </Routes>
    </Router>
  );
}

export default App;
