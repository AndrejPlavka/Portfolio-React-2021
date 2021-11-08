// import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { header } from "../../PortfolioData";
// Styles:
import { Link } from "react-router-dom";
import { theme } from "../../../GlobalStyles";
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
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.2rem;
  width: 100%;
  box-shadow: ${theme.shadow_intro_l};
  @media screen and (${theme.sm_min_768}) {
    height: 4rem;
  }
`;

const DivContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 3em;

  @media screen and (${theme.sx_min_425}) {
  }
  @media screen and (${theme.sm_min_768}) {
  }
  @media screen and (${theme.md_min_1024}) {
  }
  @media screen and (${theme.lg_min_1200}) {
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
