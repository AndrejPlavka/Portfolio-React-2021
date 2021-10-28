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
      <DivContent>
        <DivLogoSection>
          {/* <ALogo href="/">{title}</ALogo> */}
          <LinkLogo to="/">{title}</LinkLogo>
        </DivLogoSection>
        <DivNavbarSection>
          <Sidebar />
        </DivNavbarSection>
      </DivContent>
    </DivHeader>
  );
};

{
  /* <header className="site-header">
  <div className="wrapper site-header__wrapper">
    <a href="#" className="brand">
      <img src="logo.svg" alt="brand" />
    </a>
    <nav className="nav"></nav>
  </div>
</header>; */
}

// use flex-wrap: wrap; !!
// flex-basis: 100% use instead of widths

// .site-header {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }

// .site-header__wrapper {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }
///////////////////////////////////////////////////////////////////////////
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

// width1000: "max-width: 1000px",
//   width530: "max-width: 530px",
//   width760: "max-width: 760px",
//   width800: "max-width: 800px",
//   width400: "max-width: 400px",
//   width300: "max-width: 300px",

// Styled components
const DivHeader = styled.header`
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6em;
  margin: 0;
  padding-top: 0;
  padding-bottom: 0;
  flex-basis: 100%;
  /* box-shadow: 0 3px 5px -3px rgba(57, 63, 72, 0.3); */
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  @media (max-width: 760px) {
    height: 4em;
  }
`;

const DivContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-basis: 100%;
  max-width: 1300px;
  padding: 0 0.5em;
  @media screen and (max-width: 1128px) {
    padding: 0 3em;
  }
`;

const DivLogoSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const LinkLogo = styled(Link)`
  color: inherit;
  text-decoration: inherit;
  font-family: RobotoThin;
  font-weight: 100;
  font-style: normal;
  font-size: 5em;
`;

const DivNavbarSection = styled.div`
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 760px) {
    display: none;
  }
`;
