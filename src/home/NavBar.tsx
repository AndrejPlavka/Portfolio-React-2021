import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

// styled components
export const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 5rem;
  background-color: #101522;
  z-index: 10;
`;

export const SidebarNav = styled.ul<{ sidebar: boolean }>`
  width: 250px;
  height: 100vh;
  background: #101522;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: all 0.3s ease;
  opacity: 0.7;
  z-index: 11;
`;

export const NavIcon = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 5rem;
  font-size: 2rem;
  margin-left: 2rem;
  &:hover {
    opacity: 0.5;
    transition: all 0.3s ease;
  }
`;

export const DivNavItem = styled.div`
  justify-content: flex-start;
  align-items: center;
  height: 80px;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #54cbfa;
  }
`;

export const NavLinks = styled(Link)`
  color: #fff;
  text-align: left;
  text-decoration: none;
  padding: 2.5rem;
  width: 100%;
  display: table;
  &:hover {
    color: #54cbfa;
    transition: all 0.3s ease;
  }
`;

export const ImgNavLogo = styled.img`
  justify-content: flex-end;
  cursor: pointer;
  height: 80px;
  display: flex;
  align-items: right;
  margin-right: 0.5rem;
`;
// Component hooks
export const NavBar = () => {
  // States
  const [sidebar, setSidebar] = useState(false);

  //handlers
  const showSidebar = () => setSidebar((prs) => !prs);

  //Template
  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav>
        <NavIcon onClick={showSidebar}>
          {sidebar ? "" : <AiOutlineMenu />}
        </NavIcon>
        <ImgNavLogo />
      </Nav>

      <nav>
        <SidebarNav sidebar={sidebar}>
          <NavIcon onClick={showSidebar}>
            <AiOutlineClose />
          </NavIcon>
          <DivNavItem>
            <NavLinks to="/">Home</NavLinks>
          </DivNavItem>

          <DivNavItem>
            <NavLinks to="/counter">Counter</NavLinks>
          </DivNavItem>

          <DivNavItem>
            <NavLinks to="/toDoApp">Todo App</NavLinks>
          </DivNavItem>

          <DivNavItem>
            <NavLinks to="/hackertyper">Hacker Typer</NavLinks>
          </DivNavItem>

          <DivNavItem>
            <NavLinks to="/pexeso">Pexeso</NavLinks>
          </DivNavItem>

          <DivNavItem>
            <NavLinks to="/blog">Blog</NavLinks>
          </DivNavItem>

          <DivNavItem>
            <NavLinks to="/tunesapp">Tunes</NavLinks>
          </DivNavItem>

          <DivNavItem>
            <NavLinks to="/practise">Practise</NavLinks>
          </DivNavItem>
        </SidebarNav>
      </nav>
    </IconContext.Provider>
  );
};
