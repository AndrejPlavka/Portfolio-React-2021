import { Link } from "react-router-dom";
import { SiderbarType } from "./Sidebar";
import { theme } from "../../PortfolioAppTheme";
import React, { useState } from "react";
import styled from "styled-components/macro";

const SidebarLink = styled(Link)`
  /* height: 1em; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;
  list-style: none;
  text-decoration: none;
  font-size: 18px;
  color: black;
  &:hover {
    color: #737079;
    /* border-bottom: 4px solid #632ce4; */
    cursor: pointer;
  }
  @media (${theme.width800}) {
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;
    &:hover {
      background: #252831;
      border-left: 4px solid #632ce4;
      cursor: pointer;
    }
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DivDdnLink = styled.div`
  /* display: flex; */
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
  @media (${theme.width800}) {
    background: #414757;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    &:hover {
      background: #632ce4;
      cursor: pointer;
    }
  }
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
  @media (${theme.width800}) {
    background: #414757;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    &:hover {
      background: #632ce4;
      cursor: pointer;
    }
  }
`;

interface Props {
  item: any;
}

export const SubMenu = (props: Props) => {
  const { item } = props;
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav((p) => !p);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      <DivDdnLink>
        {subnav &&
          item.subNav.map((item, index) => {
            return (
              <DropdownLink to={item.path} key={index}>
                <SidebarLabel>{item.title}</SidebarLabel>
              </DropdownLink>
            );
          })}
      </DivDdnLink>
    </>
  );
};
