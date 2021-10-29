// Styles:
import { light } from "../../PortfolioAppTheme";
import styled from "styled-components/macro";

export const Footer = () => {
  return (
    <DivFooter>
      <DivContent>
        <AFooterLink href="https://github.com">
          © 2021 Andrej Plavka
        </AFooterLink>
        {/* <DivNavbarSection>
      <Sidebar />
    </DivNavbarSection> */}
      </DivContent>
    </DivFooter>
  );
};

// Styled components:
const DivFooter = styled.footer`
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 6em;
  background: white;
  box-shadow: 0px -1px 7px -2px rgba(0, 0, 0, 0.5);
  @media (max-width: 760px) {
    height: 4em;
  }
`;
const DivContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  flex-basis: 100%;
  max-width: 1300px;
  padding: 0 0.5em;
  @media screen and (max-width: 1128px) {
    padding: 0 3em;
  }
  @media screen and (max-width: 430px) {
    padding: 0 0.6em;
  }
`;
const AFooterLink = styled.a`
  text-decoration: none;
  font-family: Roboto;
  font-size: 1.2em;
  font-weight: 300;
  color: ${light.crlfg};
  @media screen and (max-width: 760px) {
    font-size: 1em;
  }
`;
