import { IconContext, IconType } from "react-icons/lib";
import { Link, NavLink } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { SubMenu } from "./SubMenu";
import React, { useState } from "react";

//Styles

import { theme } from "../../../GlobalStyles";
import styled, { keyframes } from "styled-components/macro";

export type SiderbarType = {
  title: string;
  path: string;
  icon?: JSX.Element;
  iconClosed: JSX.Element;
  iconOpened: JSX.Element;
  cv: string;
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
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav((p) => !p);

  // const showSidebar = () => setSidebar((p) => !p);

  const renderMenuItems = (data) => {
    return data.map((item: SiderbarType, index: number) =>
      item?.subNav ? (
        <li key={index}>
          <div>
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
            <button onClick={showSubnav}>
              {subnav ? item.iconOpened : item.iconClosed}
            </button>
          </div>
          {subnav ? <ul>{renderMenuItems(item.subNav)}</ul> : null}
        </li>
      ) : item?.title === "CV" ? (
        <li key={index}>
          <div>
            <a href={item.path} target="_blank" rel="noreferrer">
              {item.title}
            </a>
          </div>
        </li>
      ) : (
        <li key={index}>
          <div>
            <Link to={item.path}>{item.title}</Link>
          </div>
        </li>
      )
    );
  };

  return (
    <DivMenu subnav={subnav} sidebar={props.sidebar}>
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
      opacity: 0.8;
    }
`;
const DivMenu = styled.div<{ sidebar: boolean; subnav: boolean }>`
  /* height: 100%; */
  ul {
    display: block;
    position: absolute;
    width: 100%;
    height: auto;
    top: 3.2rem;
    right: 0;
    padding: 1em;
    margin: 0;
    text-align: left;
    transform: ${({ sidebar }) =>
      sidebar ? "translate(0)" : "translate(100%)"};
    transition: all 0.3s ease;
    list-style: none;
    background: black;
    opacity: 0.95;

    li {
      display: block;
      position: relative;
      font-size: 1.5em;
      line-height: 1;
      padding: 0.5em 0 0.5em 45%;
      float: none;

      div {
        display: flex;
        align-items: center;
        width: 100%;

        button {
          display: inline-block;
          width: 0.85em;
          color: white;
          margin-left: 0.1em;
        }
        a {
          display: inline-block;
          padding: 0.25em 0;
          text-decoration: none;
          color: #fffffffd;
          &:hover {
            color: #ffffff86;
          }
        }
      }
    }
    @media screen and (${theme.sm_min_768}) {
      position: relative;
      top: 0;
      right: 100%;
      padding: 0;
      text-align: right;
      background: none;
      opacity: 1;
      li {
        font-size: 0.8em;
        font-weight: 400;
        padding: 0.5em 0 0.5em 2.5em;
        display: inline-block;
        position: relative;
        div {
          button {
            width: 0.8em;
            color: black;
          }
          a {
            display: block;
            text-decoration: none;
            color: black;
            &:hover {
              color: #00000065;
            }
          }
        }
      }
    }
  }
  li {
    background: none;
    > ul {
      display: block;
      width: 100vw;
      height: auto;
      position: relative;
      top: 0.5em;
      right: 79%;
      padding: 0;
      transition: all 0.2s ease;
      animation: ${animate} 0.2s ease;
      border: none;
      outline: none;
      background: #292929;
      opacity: 0.95;
    }
    li {
      display: block;
      width: 100%;
      position: relative;
      font-size: 0.8em;
      line-height: 1;
      padding: 0.4em 0 0.4em 44%;
      float: none;
      div {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        width: 100%;
        a {
          display: inline-block;
          padding: 0.2em 0;
          text-decoration: none;
          color: white;
          &:hover {
            color: #000000;
          }
        }
      }
      &:hover {
        background: #6c6d6e;
      }
    }
    @media screen and (${theme.sm_min_768}) {
      ul {
        width: 8em;
        position: absolute;
        top: 3.5em;
        right: 5em;
        padding: 0.5em 0;
        margin: 0;
        text-align: left;
        opacity: 1;
        background: white;
        opacity: 0.95;
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
        overflow: hidden;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
          rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
      }
      li {
        margin: 0;
        padding: 0.25em 0;
        margin: 0;
        font-size: 0.9em;
        font-weight: 300;
        div {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          width: auto;
          padding: 0.25em 0 0.25em 1.25em;
          a {
            display: inline-block;
            padding: 0;
            text-decoration: none;
            color: #000000;
          }
        }
        &:hover {
          background: #f8f8f89d;
          box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
            rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
          border-left: 1px solid #000000;
        }
      }
    }
  }
`;

// @media screen and (${theme.sm_min_768}) {
//   ul {
//     width: 8em;
//     position: absolute;
//     top: 3.5em;
//     right: 5em;
//     padding: 0.5em 0;
//     margin: 0;
//     text-align: left;
//     opacity: 1;
//     /* background: #00000045; */
//     border-radius: 3px;
//     overflow: hidden;
//     box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
//       rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
//   }
//   li {
//     margin: 0;
//     padding: 0.25em 0;
//     margin: 0;
//     font-size: 0.9em;
//     font-weight: 300;
//     /* border-bottom: 1px solid #4d515531; */
//     div {
//       display: flex;
//       flex-flow: row nowrap;
//       align-items: center;
//       width: auto;
//       padding: 0.25em 0 0.25em 1.25em;
//       a {
//         display: inline-block;
//         padding: 0;
//         text-decoration: none;
//         color: white;
//       }
//     }
//     &:hover {
//       background: #878b919d;
//       /* border-left: 1px solid #33a3ff; */
//       border-left: 1px solid #000000;
//     }
//   }
// }
// }

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
