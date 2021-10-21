import { Dropdown } from "./DropDownMenu";
import { MdClose } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { MdModeNight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";
import { contact, projects, skills } from "../../PortfolioData";
import { useContext, useState } from "react";

// Styles
import styled from "styled-components/macro";

// Component
export const Navbar = () => {
  const { themeName, toggleTheme } = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState<boolean>(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  // Template
  return (
    <nav>
      <DivNavbar>
        {/* <NavLink to="/" exact>
        Home
      </NavLink> */}

        <Dropdown />

        <NavLink to="/about">About</NavLink>

        <button type="button" onClick={toggleTheme} aria-label="toggle theme">
          {themeName === "dark" ? <MdModeNight /> : <MdLightMode />}
        </button>

        <button
          type="button"
          onClick={toggleNavList}
          aria-label="toggle navigation"
        >
          {showNavList ? <MdClose /> : <MdMenu />}
        </button>
      </DivNavbar>
    </nav>
    // <nav className="center nav">
    //   <ul className="nav__list">
    //     {projects.length ? (
    //       <li className="nav__list-item">
    //         <a
    //           href="#projects"
    //           onClick={toggleNavList}
    //           className="link link--nav"
    //         >
    //           Projects
    //         </a>
    //       </li>
    //     ) : null}

    //     {skills.length ? (
    //       <li className="nav__list-item">
    //         <a
    //           href="#skills"
    //           onClick={toggleNavList}
    //           className="link link--nav"
    //         >
    //           Skills
    //         </a>
    //       </li>
    //     ) : null}

    //     {contact.email ? (
    //       <li className="nav__list-item">
    //         <a
    //           href="#contact"
    //           onClick={toggleNavList}
    //           className="link link--nav"
    //         >
    //           Contact
    //         </a>
    //       </li>
    //     ) : null}
    //   </ul>

    //   <button
    //     type="button"
    //     onClick={toggleTheme}
    //     className="btn btn--icon nav__theme"
    //     aria-label="toggle theme"
    //   >
    //     {themeName === "dark" ? <MdModeNight /> : <MdLightMode />}
    //   </button>

    //   <button
    //     type="button"
    //     onClick={toggleNavList}
    //     className="btn btn--icon nav__hamburger"
    //     aria-label="toggle navigation"
    //   >
    //     {showNavList ? <MdClose /> : <MdMenu />}
    //   </button>
    // </nav>
  );
};

//Styled components:

const DivNavbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

// .nav__list {
//   margin-right: 1.5em;
//   display: flex;
// }
// .nav__list-item {
//   margin-left: 1.5em;
// }

// .app .nav__hamburger {
//   display: none;
// }

// .nav__theme {
//   margin-top: 0.4em;
// }

// @media (max-width: 600px) {
//   .nav__list {
//     display: none;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     position: fixed;
//     inset: 0;
//     width: 100%;
//     height: 100%;
//     z-index: 2;
//   }

//   .nav__list-item {
//     margin: 0.5em 0;
//   }

//   .app .nav__hamburger {
//     display: flex;
//     z-index: 2;
//     margin-left: 0.8em;
//   }
// }
