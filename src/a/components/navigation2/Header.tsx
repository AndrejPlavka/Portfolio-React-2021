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
          <LinkLogo to="/">{title}</LinkLogo>
        </DivLogoSection>
        <DivNavbarSection>
          <Sidebar />
        </DivNavbarSection>
      </DivContent>
    </DivHeader>
  );
};
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
  padding: 0;
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
  padding: 0 3em;
  @media screen and (max-width: 1128px) {
    padding: 0 3em;
  }
  @media screen and (max-width: 450px) {
    padding: 0 1.7em;
  }
  @media screen and (max-width: 375px) {
    padding: 0 1.5em;
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
  @media screen and (max-width: 780px) {
    font-size: 4em;
  }
`;

const DivNavbarSection = styled.div`
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 780px) {
    display: none;
  }
`;
