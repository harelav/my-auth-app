import React from "react";
import "./About.css";
import dylenBuilding from "../assets/Dylen.jpg"; 
import amirBuilding from "../assets/Amir.jpg";
import coffeeShop from "../assets/Coffee_Shop.jpg";
import parkingLot from "../assets/Parking_Lot.jpeg";
import portown from "../assets/portown.jpg"; 
import hachsharatHaishuv from "../assets/Hacsharat_haishuv.png"; 

const buildings = [
  { 
    name: "Dylen Building",
    image: dylenBuilding,
    address: "16 HaNamal St, Haifa",
    description: "A modern educational facility offering advanced research labs and classrooms."
  },
  { 
    name: "Amir Building",
    image: amirBuilding,
    address: "65 HaNamal St, Haifa",
    description: "A central hub for lectures and student activities."
  },
  { 
    name: "Portown Auditorium",
    image: portown,
    address: "36 HaNamal St, Haifa",
    description: "A conference and event center for large academic gatherings."
  },
  { 
    name: "Hachsharat Haishuv",
    image: hachsharatHaishuv,
    address: "1 Palmer St, Haifa",
    description: "A historical building housing various university departments."
  },
  { 
    name: "Campus Coffee Shop",
    image: coffeeShop,
    address: "Near Dylen Building, Haifa University",
    description: "A cozy place to grab coffee and snacks while studying."
  },
  { 
    name: "Parking Lot",
    image: parkingLot,
    address: "Main Parking, Haifa University",
    description: "Convenient parking space for students and faculty."
  }
];

const About = () => {
  return (
    <div className="about-container">
      <h2>About the Campus</h2>
      <div className="building-list">
        {buildings.map((building, index) => (
          <div key={index} className="building-card">
            <img src={building.image} alt={building.name} className="building-image"/>
            <h3>{building.name}</h3>
            <p className="building-address">📍 {building.address}</p>
            <p className="building-description">{building.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
