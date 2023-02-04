import React, { useState } from "react";

//ASSETS
import logo from "../assets/logo.svg";

//STYLES
import "./Home.scss";

//COMPONENT
export const Home = () => {
  //TEMPLATE
  return (
    <div className="home">
      <img className="logo" src={logo} alt="react logo" />
      <p style={{ fontWeight: "lighter", color: "white" }}>
        Search for your favrite music to your hart content by Tunes
      </p>
    </div>
  );
};
