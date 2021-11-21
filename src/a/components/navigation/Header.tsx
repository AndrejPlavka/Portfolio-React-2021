// import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { header, navbar } from "../../PortfolioData";
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
          <button onClick={showSidebar}>
            {sidebar ? navbar.close : navbar.open}
          </button>
          <Sidebar showSidebar={showSidebar} sidebar={sidebar} />
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
  height: 3.25rem;
  width: 100%;
  background: ${theme.intro_bg_w};
  box-shadow: ${theme.shadow_intro_l};
  @media screen and (${theme.sm_min_768}) {
    height: 4.5rem;
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
  font-weight: 200;
  font-style: normal;
  font-size: 3em;
  line-height: 1;
  margin: none;
  padding: none;
`;

const DivNavbarSection = styled.div`
  button {
    display: flex;
    width: 2.5em;
    height: 2.5em;
    background: none;
    outline: none;
    border: none;
    align-items: center;
    /* opacity: 0.5; */
  }
  &:hover {
    opacity: 1;
  }
  @media (${theme.sm_min_768}) {
    button {
      display: none;
    }
  }
`;
