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
    height: 100%;
    background: none;
    outline: none;
    border: none;
    align-items: center;
    /* opacity: 0.5; */
  }
  &:hover {
    opacity: 1;
  }
  @media screen and (${theme.sm_min_768}) {
    button {
      display: none;
    }
  }
`;
// *******************************************************************
{
  /* <DivBackground>
  <DivHeader>
    <DivForMobile>
      <LinkStyled to="/" exact>
        PAVOLOLBERT.COM
      </LinkStyled>
      <HamburgerIcon
        className={opened ? "fas fa-times" : "fas fa-bars"}
        onClick={() => setOpened((prev) => !prev)}
      />
    </DivForMobile>
    <DivLinks opened={opened}>
      <LinkMargin to="/aboutme" onClick={() => setOpened(false)}>
        About Me
      </LinkMargin>
      <LinkMargin to="/portfolio" onClick={() => setOpened(false)}>
        Portolio
      </LinkMargin>
      <LinkMargin to="/contact" onClick={() => setOpened(false)}>
        Contact me
      </LinkMargin>
    </DivLinks>
  </DivHeader>
</DivBackground>; */
}
// const fadeFromLeft = keyframes`
// 0% {
//       opacity: 0;
//       left: -300;
//    }
//    100% {
//       opacity: 1;
//       left: 0;
//    }`;
// const DivHeader = styled.div`
//   display: flex;
//   min-height: 6.5%;
//   justify-content: space-between;
//   font-family: "Amatic SC", cursive;
//   align-items: center;
//   font-size: 2em;
//   background: ${theme.black};

//   @media (${theme.width800}) {
//     flex-direction: column;
//   }
// `;
// const DivForMobile = styled.div`
//   padding: 0 0.5em;
//   @media (${theme.width800}) {
//     width: 100%;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   }
// `;
// const HamburgerIcon = styled.i`
//   color: ${theme.white};
//   display: none !important;
//   cursor: pointer;
//   @media (${theme.width800}) {
//     display: inline !important;
//   }
// `;
// const DivBackground = styled.div`
//   background: ${theme.black};
//   padding: 0.5em 0;
//   border-bottom: 4px solid ${theme.headerBorderColor};
// `;
// const LinkStyled = styled(Link)`
//   color: ${theme.white};
//   font-weight: 700;
//   text-decoration: none;
// `;
// const DivLinks = styled.div<{ opened }>`
//   @media (${theme.width800}) {
//     z-index: 400;
//     background: ${theme.white};
//     width: 100%;
//     text-align: center;
//     display: ${(p) => (p.opened ? "block" : "none")};
//     position: absolute;
//     top: 56px;
//     animation: 0.3s ${fadeFromLeft} ease-out;
//   }
// `;
// const LinkMargin = styled(LinkStyled)`
//   margin-right: 1em;
//   @media (${theme.width800}) {
//     padding: 0.5em 0;
//     border-bottom: 1px solid ${theme.lightGrey};
//     box-shadow: ${theme.headerShadow1} 0px 2px 5px -1px,
//       ${theme.headerShadow2} 0px 1px 3px -1px;
//     display: block;
//     margin: 0;
//     width: 100%;
//     color: ${theme.brown};
//   }
// `;
