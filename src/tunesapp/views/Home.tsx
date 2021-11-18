import React, { useState } from "react";

//ASSETS
import logo from "../assets/logo.svg";

//STYLES
import "./Home.scss";

//COMPONENT
export const Home = () => {
  //STATE - just for practise purpose
  const [title] = useState("Homepage");

  //TEMPLATE
  return (
    <div className="home">
      <img className="logo" src={logo} alt="react logo" />
      {/* <h1>{title}</h1> */}
      {/* <p style={{ fontWeight: "lighter" }}>
        Search for your favrite music to your hart content by Tunes
      </p> */}
    </div>
  );
};
