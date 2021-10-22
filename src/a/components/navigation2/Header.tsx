// import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { header } from "../../PortfolioData";
// Styles:
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
// Component:
export const Navbar = () => {
  const { homepage, title } = header;

  // Tempplate:
  return (
    <DivHeader>
      <SectionLogo>
        {/* <ALogo href="/">{title}</ALogo> */}
        <LinkLogo to="/">{title}</LinkLogo>
      </SectionLogo>
      <SectionNavbar>
        <Sidebar />
      </SectionNavbar>
    </DivHeader>
  );
};

// import React from 'react';

// function Header() {
//   {/* future hook logic will go here */}

//   return (
//     <header className={`header ${scrollStyle} ${shadowStyle}`}>
//       <div className="logo">Logo</div>
//       <ul className="links">
//         <li className="link-item">home</li>
//         <li className="link-item">about</li>
//         <li className="link-item">join</li>
//       </ul>
//     </header>
//   );
// }

// Styled components
const DivHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10em;
  height: 5em;
  width: 100%;
  -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  /* box-shadow: 0 3px 5px -3px rgba(57, 63, 72, 0.3); */ // alternative 1
  /* box-shadow: 0 9px 9px -9px rgba(0, 0, 0, 0.13); */ // alternative 2
  @media (max-width: 600px) {
    height: 6em;
  }
`;

const SectionLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10em;
  @media (max-width: 600px) {
    margin-left: 2em;
  }
`;
const LinkLogo = styled(Link)`
  color: inherit;
  text-decoration: inherit;
  font-family: RobotoThin;
  font-size: 3em;
`;
// const ALogo = styled.a`
//   color: inherit;
//   text-decoration: inherit;
//   font-family: RobotoThin;
//   font-size: 3em;
// `;

const SectionNavbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-right: 10em;
  @media (max-width: 600px) {
    margin-right: 2em;
  }
`;
