import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { IconContext, IconType } from "react-icons/lib";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { SubMenu } from "./SubMenu";
import React, { useState } from "react";

//Styles
import { theme } from "../../PortfolioAppTheme";
import styled from "styled-components/macro";

const DivNav = styled.div`
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const LinkNavIcon = styled(Link)`
  height: 80px;
  display: none;
  justify-content: flex-start;
  align-items: center;
  margin-left: 2rem;
  height: 80px;
  font-size: 2rem;
  @media (${theme.width800}) {
    display: flex !important;
  }
`;

const NavSidebar = styled.nav<{ sidebar: boolean }>`
  @media (${theme.width800}) {
    z-index: 10;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
    right: 0;
    transition: 350ms;
    z-index: 10;
    background: #15171c;
  }
`;

const DivSidebarWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  @media (${theme.width800}) {
    width: 100%;
    display: block;
  }
`;
// let iconStyle = {sidebar? color: white : color: black};
// let iconStyle = { color: `${({ sidebar }) => (sidebar ? "white" : "black")}` };
// let iconStyle = { color: "black" };

export type SiderbarType = {
  title: string;
  path: string;
  icon?: JSX.Element;
  iconClosed: JSX.Element;
  iconOpened: JSX.Element;
  subNav: {
    title: string;
    path: string;
    icon?: JSX.Element;
    cName: string;
  };
};

export const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar((p) => !p);

  return (
    <>
      {/* <IconContext.Provider > */}
      <DivNav>
        <LinkNavIcon to="#">
          <FaIcons.FaBars style={{ color: "black" }} onClick={showSidebar} />
        </LinkNavIcon>
      </DivNav>
      <NavSidebar sidebar={sidebar}>
        <DivSidebarWrap>
          <LinkNavIcon to="#">
            <AiIcons.AiOutlineClose
              style={{ color: "white" }}
              onClick={showSidebar}
            />
          </LinkNavIcon>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </DivSidebarWrap>
      </NavSidebar>
      {/* </IconContext.Provider> */}
    </>
  );
};

/* 
ukazka zapisu podmienky 
<FaIcons.FaBars
            style={sidebar ? { color: "white" } : { color: "black" }}
            onClick={showSidebar}
          /> */

/* 
podmienka pre ikonu do styled commponent styled.-> chybove hlasenia na DOM 
{color: ${({ sidebar }) => (sidebar ? "white" : "black")};} */

// App css
// @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

// * {
//   box-sizing: border-box;
//   margin: 0;
//   padding: 0;
//   font-family: 'Lato', sans-serif;
// }

// .home,
// .reports,
// .products,
// .team,
// .reports {
//   display: flex;
//   height: 90vh;
//   align-items: center;
//   justify-content: center;
//   font-size: 3rem;
// }
