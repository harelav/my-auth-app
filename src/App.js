import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Register from "./components/Register"; // שימוש בקובץ הקיים שלך
import SelectLocation from "./components/SelectLocation";
import PeopleList from "./components/PeopleList";
import Navbar from "./components/Navbar";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    setIsAuthenticated(!!storedUser); // אם יש משתמש מחובר, עדכן את המצב
  }, []);

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/select-location" element={isAuthenticated ? <SelectLocation /> : <Navigate to="/login" />} />
        <Route path="/people-list" element={isAuthenticated ? <PeopleList /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
