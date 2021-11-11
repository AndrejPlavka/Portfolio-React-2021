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
      opacity: 1;
    }
`;
const DivMenu = styled.div<{ sidebar: boolean }>`
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
    transition: all 0.5s ease;
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
          width: 1.25em;
          color: white;
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
      width: auto;
      position: relative;
      top: 0;
      right: 100%;
      padding: 0;
      text-align: right;
      background: none;
      opacity: 1;
      li {
        font-size: 1em;
        padding: 0.5em 0 0.5em 1em;
        display: inline-block;
        position: relative;
        font-weight: 400;
        div {
          opacity: 1;
          button {
            width: 1.25em;
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
      animation: ${animate} 0.15s ease;
      border: none;
      outline: none;
      background: #292929;
      opacity: 0.95;
    }
    li {
      display: block;
      width: 100%;
      position: relative;
      font-size: 0.9em;
      line-height: 1;
      padding: 0.5em 0 0.5em 43%;
      float: none;
      div {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        width: 100%;
        button {
          display: inline-block;
          width: 1.25em;
          color: white;
        }
        a {
          display: inline-block;
          padding: 0.25em 0;
          text-decoration: none;
          color: white;
          &:hover {
            color: #000000;
          }
        }
      }
      &:hover {
        background: #5d5e5f;
      }
    }
    @media screen and (${theme.sm_min_768}) {
      ul {
        width: 10em;
        position: absolute;
        top: 5em;
        right: 8em;
        padding: 1em 0;
        margin: 0;
        text-align: left;
        opacity: 0.8;
        background: #000000;
        border: 1px solid black;
        border-radius: 4px;
        &:hover {
          opacity: 0.9;
        }
      }
      li {
        width: 100%;
        margin: 0;
        padding: 0.25em 0;
        margin: 0;
        font-size: 0.9em;
        font-weight: 400;
        div {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          width: auto;
          padding: 0.25em 0 0.25em 2.5em;
          a {
            display: inline-block;
            padding: 0;
            text-decoration: none;
            color: white;
            &:hover {
              color: #000000;
            }
          }
        }
        &:hover {
          background: #828b92;
        }
      }
    }
    &:hover {
      /* & > ul {
        display: block;
        width: 100%;
        position: relative;
        top: 0;
        right: 0;
        animation: ${animate} 0.15s ease;
        border: none;
        outline: none;
      }
      li {
        display: block;
        position: relative;
        float: none;
        background: #b9bbbd;
        opacity: 0.85;
        &:hover {
          background: #828b92;
        }
      }
      @media screen and (${theme.sm_min_768}) {
        > ul {
          width: 200px;
          position: absolute;
          top: 4.25rem;
          left: 0;
        }
        li {
          background: #b9bbbd;
          opacity: 0.7;
          &:hover {
            background: #828b92;
          }
        }
      } */
    }
  }
`;

// 2.vs without arrow
// const animate = keyframes`
//     from {
//      opacity: 0;
//     }
//     to {
//       opacity: 1;
//     }
// `;
// const DivMenu = styled.div<{ sidebar: boolean }>`
//   /* height: 100%; */
//   ul {
//     display: block;
//     position: absolute;
//     width: 100%;
//     height: auto;
//     top: 3.2rem;
//     right: 0;
//     padding: 0;
//     margin: 0;
//     text-align: center;
//     transform: ${({ sidebar }) =>
//       sidebar ? "translate(0)" : "translate(100%)"};
//     transition: all 0.5s ease;
//     list-style: none;

//     li {
//       display: block;
//       position: relative;
//       font-size: 1.25em;
//       padding: 0.5em;
//       float: none;
//       a {
//         display: block;
//         padding: 0.5em;
//         text-decoration: none;
//         color: black;
//         &:hover {
//           color: green;
//         }
//       }
//     }
//     @media screen and (${theme.sm_min_768}) {
//       width: auto;
//       position: relative;
//       top: 0;
//       padding: 0;
//       li {
//         font-size: 1.25em;
//         padding: 0.5em;
//         display: inline-block;
//         position: relative;
//         a {
//           display: block;
//           text-decoration: none;
//           color: black;
//           &:hover {
//             color: green;
//           }
//         }
//       }
//     }
//   }
//   li {
//     background: none;
//     ul {
//       display: none;
//     }
//     &:hover {
//       & > ul {
//         display: block;
//         width: 100%;
//         position: relative;
//         top: 0;
//         right: 0;
//         animation: ${animate} 0.15s ease;
//         border: none;
//         outline: none;
//       }
//       li {
//         display: block;
//         position: relative;
//         float: none;
//         background: #b9bbbd;
//         opacity: 0.85;
//         &:hover {
//           background: #828b92;
//         }
//       }
//       @media screen and (${theme.sm_min_768}) {
//         > ul {
//           width: 200px;
//           position: absolute;
//           top: 4.25rem;
//         }
//         li {
//           background: #b9bbbd;
//           opacity: 0.7;
//           &:hover {
//             background: #828b92;
//           }
//         }
//       }

//     }
//   }
// `;

// const animate = keyframes`
//     from {
//      opacity: 0;
//     }
//     to {
//       opacity: 1;
//     }
// `;
// const DivMenu = styled.div<{ sidebar: boolean }>`
//   height: 100%;
//   ul {
//     height: auto;
//     padding: 0;
//     margin: 0;
//     list-style: none;
//     transition: all 0.5s ease;
//     li {
//       /* height: 2em; */
//       font-size: 1.25em;
//       padding: 0.5em;
//       display: block;
//       position: relative;
//       float: left;
//       a {
//         display: block;
//         text-decoration: none;
//         color: black;
//         &:hover {
//           color: green;
//         }
//       }
//     }
//     @media screen and (max-width: 780px) {
//       display: block;
//       position: fixed; //absolute
//       width: 200px;
//       top: 4rem;
//       right: 0;
//       text-align: left;
//       transform: ${({ sidebar }) =>
//         sidebar ? "translate(0)" : "translate(100%)"};
//       li {
//         float: none;
//         a {
//           padding: 0.5rem;
//         }
//       }
//     }
//   }
//   li {
//     background: none;
//     ul {
//       display: none;
//     }
//     &:hover {
//       & > ul {
//         display: block;
//         width: 200px;
//         position: absolute;
//         padding-top: 1.25rem;
//         animation: ${animate} 0.15s ease;
//         border: none;
//         outline: none;
//       }
//       li {
//         float: none;
//         background: #b9bbbd;
//         opacity: 0.7;
//         border: none;
//         outline: none;
//         &:hover {
//           background: #828b92;
//         }
//       }
//       @media screen and (max-width: 780px) {
//         & > ul {
//           display: block;
//           position: relative;
//           width: 100%;
//           top: 0;
//           right: 0;
//         }
//         li {
//           display: block;
//           position: relative;
//         }
//       }
//     }
//   }
// `;

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
