import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { IconContext, IconType } from "react-icons/lib";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { SubMenu } from "./SubMenu";
import React, { useState } from "react";

//Styles
import "./Styles.scss";
import { theme } from "../../PortfolioAppTheme";
import styled from "styled-components/macro";

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
  const data = SidebarData;
  const showSidebar = () => setSidebar((p) => !p);

  const renderMenuItems = (data) => {
    return data.map((item: SiderbarType, index: number) =>
      item?.subNav ? (
        <li key={index}>
          <Link to={item.path}>
            {item.title}
            <div>
              {/* {item.subNav && subnav
                ? item.iconOpened
                : item.subNav
                ? item.iconClosed
                : null} */}
            </div>
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
    data && (
      <>
        <div className="multilevelMenu">
          <ul className="main-navigation">{renderMenuItems(data)}</ul>
        </div>
      </>
    )
  );

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

const DivMenu = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    background: #2c3e50;
  }

  li {
    ul {
      display: none;
    }
    &:hover {
      & > ul {
        display: block;
        position: absolute;
      }
      li {
        float: none;
        a {
          &:hover {
            background: #151e27;
          }
        }
      }
      a {
        background: #2c3e50;
      }
    }
  }
`;
