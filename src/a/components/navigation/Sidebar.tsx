import { IconContext, IconType } from "react-icons/lib";
import { Link, NavLink } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { SubMenu } from "./SubMenu";
import React, { useState } from "react";

//Styles
import { theme } from "../portfolio/PortfolioAppTheme";
import styled, { keyframes } from "styled-components/macro";

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
interface Props {
  sidebar: boolean;
  // showSubnav: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Sidebar = (props: Props) => {
  // const [sidebar, setSidebar] = useState(true);
  const data = SidebarData;
  // const showSidebar = () => setSidebar((p) => !p);

  const renderMenuItems = (data) => {
    return data.map((item: SiderbarType, index: number) =>
      item?.subNav ? (
        <li key={index}>
          {/* <button onClick={props.showSubnav}>{"<"}</button> */}
          <Link to={item.path}>
            {item.title}
            {/*<div>
               {item.subNav && subnav
                ? item.iconOpened
                : item.subNav
                ? item.iconClosed
                : null} 
            </div>*/}
          </Link>
          <ul>{renderMenuItems(item.subNav)}</ul>
        </li>
      ) : (
        <li key={index}>
          <Link to={item.path}>{item.title}</Link>
        </li>
      )
    );
  };

  return (
    <DivMenu sidebar={props.sidebar}>
      <ul>{renderMenuItems(data)}</ul>
    </DivMenu>
  );
};

/* 
ex. zapisu podmienky 
<FaIcons.FaBars
            style={sidebar ? { color: "white" } : { color: "black" }}
            onClick={showSidebar}
          /> */

/* 
podmienka pre ikonu do styled commponent styled.-> chybove hlasenia na DOM 
{color: ${({ sidebar }) => (sidebar ? "white" : "black")};} */

const animate = keyframes`
    from {
     opacity: 0;
    }
    to {
      opacity: 0.7;
    }
`;
const DivMenu = styled.div<{ sidebar: boolean }>`
  height: 100%;
  ul {
    height: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    transition: all 0.5s ease 0s;
    li {
      font-size: 1.25rem;
      padding: 1rem;
      display: block;
      position: relative;
      float: left;
      a {
        display: block;
        text-decoration: none;
        color: black;
        &:hover {
          color: green;
        }
      }
    }
    @media screen and (max-width: 780px) {
      display: block;
      position: fixed; //absolute
      width: 200px;
      top: 4rem;
      right: 0;
      text-align: left;
      transform: ${({ sidebar }) =>
        sidebar ? "translate(0)" : "translate(100%)"};
      li {
        float: none;
        a {
          padding: 0.5rem;
        }
      }
    }
  }
  li {
    background: none;
    ul {
      display: none;
    }
    &:hover {
      & > ul {
        display: block;
        width: 200px;
        position: absolute;
        padding-top: 1.25rem;
        animation: ${animate} 0.15s ease;
        border: none;
        outline: none;
      }
      li {
        float: none;
        background: #b9bbbd;
        opacity: 0.7;
        border: none;
        outline: none;
        &:hover {
          background: #828b92;
        }
      }
      @media screen and (max-width: 780px) {
        & > ul {
          display: block;
          position: relative;
          width: 100%;
          top: 0;
          right: 0;
        }
        li {
          display: block;
          position: relative;
        }
      }
    }
  }
`;

// previous design - sidebar (flex box) *****************************************************************************
// const Nav = styled.div`
//   /* background: #15171c; */
//   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;

// const NavIcon = styled(Link)`
//   margin-left: 2rem;
//   font-size: 2rem;
//   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;

// const SidebarNav = styled.nav<{ sidebar: boolean }>`
//   background: #15171c;
//   width: 250px;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   position: fixed;
//   top: 0;
//   right: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
//   transition: 350ms;
//   z-index: 10;
// `;

// const SidebarWrap = styled.div`
//   width: 100%;
// `;
// let iconStyle = {sidebar? color: white : color: black};
// let iconStyle = { color: `${({ sidebar }) => (sidebar ? "white" : "black")}` };
// let iconStyle = { color: "black" };

// return (
//   <>
//     <Nav>
//       <NavIcon to="#">
//         <FaIcons.FaBars style={{ color: "black" }} onClick={showSidebar} />
//       </NavIcon>
//     </Nav>
//     <SidebarNav sidebar={sidebar}>
//       <SidebarWrap>
//         <NavIcon to="#">
//           <AiIcons.AiOutlineClose
//             style={{ color: "white" }}
//             onClick={showSidebar}
//           />
//         </NavIcon>
//         {SidebarData.map((item, index) => {
//           return <SubMenu item={item} key={index} />;
//         })}
//       </SidebarWrap>
//     </SidebarNav>
//   </>
// );
