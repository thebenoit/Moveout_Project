import React from "react";
import './Logo.css';

function Logo({titre, imageSrc, action}) {
  return (
    <div className="logo-container" onClick={action}>
      <img src={imageSrc} alt="Logo" className="logo-img" />
      <span className="logo-text">{titre}</span>
      
    </div>
  );
}

export default Logo;
