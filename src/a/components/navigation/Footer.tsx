// Styles:
import { light } from "../portfolio/PortfolioAppTheme";
import { theme } from "../../../GlobalStyles";
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
  height: 4em;
  background: white;
  box-shadow: ${theme.shadow_intro_s};
  @media screen and (${theme.sm_min_768}) {
    height: 4rem;
  }
`;
const DivContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  flex-basis: 100%;
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
const AFooterLink = styled.a`
  text-decoration: none;
  font-family: Roboto;
  font-size: 1em;
  font-weight: 300;
  color: ${theme.text_gr_l};
  @media screen and (${theme.sm_min_768}) {
    font-size: 0.8em;
  }
`;
