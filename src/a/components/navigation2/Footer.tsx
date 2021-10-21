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
  padding: 3em 0;
  margin-top: 10em;
  text-align: center;
  -webkit-box-shadow: 0px -1px 7px -2px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px -1px 7px -2px rgba(0, 0, 0, 0.5);
  box-shadow: 0px -1px 7px -2px rgba(0, 0, 0, 0.5);
  @media (max-width: 600px) {
    padding: 2em;
    margin-top: 3em;
  }
`;

const AFooterLink = styled.a`
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${light.crlfg};
`;
