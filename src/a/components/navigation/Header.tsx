// import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { header } from "../../PortfolioData";
// Styles:
import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components/macro";
// Component:
export const Navbar = () => {
  const { homepage, title } = header;
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar((p) => !p);

  // Tempplate:
  return (
    <DivHeader>
      <DivContent>
        <DivLogoSection>
          <LinkLogo to="/">{title}</LinkLogo>
        </DivLogoSection>
        <DivNavbarSection>
          <button onClick={showSidebar}>X</button>
          <Sidebar sidebar={sidebar} />
        </DivNavbarSection>
      </DivContent>
    </DivHeader>
  );
};

// Styled components
const DivHeader = styled.header`
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  width: 100%;
  box-shadow: 0 3px 5px -3px rgba(57, 63, 72, 0.3);
  /* box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3); */
  @media (max-width: 780px) {
    height: 3.5rem;
  }
`;

const DivContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* font-size: 24px; */
  width: 100%;
  max-width: 1300px;
  padding: 0 3em;
  @media screen and (max-width: 1128px) {
    padding: 0 3em;
  }
  @media screen and (max-width: 450px) {
    padding: 0 1.7em;
  }
  @media screen and (max-width: 375px) {
    padding: 0 1em;
  }
`;

const DivLogoSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const LinkLogo = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-family: RobotoThin;
  font-weight: 100;
  font-style: normal;
  font-size: 3.5em;
  margin: none;
  padding: none;
  background-color: green;
  /* @media screen and (max-width: 780px) {
    font-size: 2.5em;
  } */
`;

const DivNavbarSection = styled.div`
  button {
    display: none;
  }
  @media screen and (max-width: 780px) {
    button {
      display: flex;
    }
  }
`;
