import * as React from "react";
import { useNavigate } from "react-router-dom";

import { CgProfile } from "react-icons/cg";
import exlLogo from "../assets/EXL_logo.png";
import "../../src/components/Header/header.css";

export const AppBar = () => {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <img className="brand-logo" src={exlLogo} alt="exl" />
      <h3 className="project-title">Clinical CoPilot</h3>
      <div className="profile-icon-container">
        <CgProfile className="profile-icon" />
      </div>
    </div>

    
  );
};
