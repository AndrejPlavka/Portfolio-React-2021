// Styles:
import { light } from "../../PortfolioAppTheme";
import styled from "styled-components/macro";

export const Footer = () => {
  return (
    <FooterContainer>
      <AFooterLink href="https://github.com" className="link footer__link">
        Created By Andrej Plavka
      </AFooterLink>
    </FooterContainer>
  );
};

// Styled components:
const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 6em;
  background: white;
  /* text-align: center; */
  box-shadow: 0px -1px 7px -2px rgba(0, 0, 0, 0.5);
  /* -webkit-box-shadow: inset 0px 6px 4px -5px rgba(0, 0, 0, 0.37);
  -moz-box-shadow: inset 0px 6px 4px -5px rgba(0, 0, 0, 0.37);
  box-shadow: inset 0px 6px 4px -5px rgba(0, 0, 0, 0.37); */
  @media (max-width: 760px) {
    height: 4em;
  }
`;

const AFooterLink = styled.a`
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${light.crlfg};
`;
