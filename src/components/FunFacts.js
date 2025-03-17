import React, { useState } from "react";
import "./FunFacts.css";
import backgroundImage from "../assets/university-background.jpeg"; 

const funFacts = [
  { 
    title: "University Campuses", 
    fact: "Haifa University has two main campuses: the main campus on Mount Carmel and the City Campus downtown."
  },
  { 
    title: "City Campus", 
    fact: "The City Campus is located in the Port of Haifa area, offering students access to cultural and business hubs."
  },
  { 
    title: "University Library", 
    fact: "The main library at Haifa University contains over 1.5 million books and digital resources."
  },
  { 
    title: "Marine Research", 
    fact: "Haifa University is a leader in marine research, with an oceanographic research institute collaborating with global scientists."
  },
  { 
    title: "Eshkol Tower", 
    fact: "The Eshkol Tower is the tallest building on the main campus, providing stunning panoramic views of Haifa."
  },
  { 
    title: "Academic Diversity", 
    fact: "Haifa University has students from over 80 countries, fostering a diverse and international academic environment."
  },
];


const FunFacts = () => {
    const [visibleFact, setVisibleFact] = useState(null);
  
    return (
      <div className="funfacts-container">
        <img src={backgroundImage} alt="university background" className="background-image" />
        <div className="content">
          <h1 className="title">Fun facts about the University</h1> {}
          <div className="facts-list">
            {funFacts.map((item, index) => (
              <div key={index} className="fact-item">
                <button className="fact-button" onClick={() => setVisibleFact(visibleFact === index ? null : index)}>
                  {item.title}
                </button>
                {visibleFact === index && <p className="fact-text">{item.fact}</p>} {}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default FunFacts;