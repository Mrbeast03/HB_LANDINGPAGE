import React from "react";
import { useNavigate } from "react-router-dom";
import videoFile from "../assets/HEXAB2.mp4"; // Import the video file from src/assets
import "./RunningMan.css"; // Import the CSS file

const RunningMan = () => {
  const navigate = useNavigate();

  // Delay navigation by 3500ms (3.5 seconds) after click
  const handleClick = () => {
    setTimeout(() => {
      navigate("/lp");
    },1500 );
  };

  return (
    <div className="running-man-container">
     
  
      
      {/* Video element using the imported video */}
      <video
        className="video"
        autoPlay
        loop
        muted
        onClick={handleClick}
      >
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <p className="instruction">
         HEXABETA@2025
      </p>
    </div>
  );
};

export default RunningMan;
