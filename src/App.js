import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import EnterName from "./components/EnterName";
import SelectLocation from "./components/SelectLocation";
import PeopleList from "./components/PeopleList";
import About from "./components/About";  // changed from aboutCampus
import Navbar from "./components/Navbar";
import FunFacts from "./components/FunFacts"; // just some random facts

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/enter-name" element={<EnterName />} />  {/* first needs to type their name */}
        <Route path="/select-location" element={<SelectLocation />} />  {}
        <Route path="/people-list" element={<PeopleList />} />  {}
        <Route path="/about" element={<About />} />  {}
        <Route path="/fun-facts" element={<FunFacts />} />  {/* fun little section */}
      </Routes>
    </Router>
  );
}

export default App;
