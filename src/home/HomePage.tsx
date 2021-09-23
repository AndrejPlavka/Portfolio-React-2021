import React, { Component } from "react";
import logo from "./logo.svg";
import styled from "styled-components";

export const DivHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 10rem;
  margin: auto;
  color: black;
`;

export const ImgLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: logo-spin infinite 20s linear;
  }

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  } ;
`;

// CLASS
export class HomePage extends Component {
  render() {
    //TEMPLATE
    return (
      <DivHome>
        <ImgLogo src={logo} />
        <h1>HomePage</h1>
        <p>ITA REACT 2021</p>
      </DivHome>
    );
  }
}
