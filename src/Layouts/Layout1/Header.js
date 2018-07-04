import React from "react";
import styled from "styled-components";
import FaBars from "react-icons/lib/fa/bars";
import PersonIcon from "react-icons/lib/md/person";

import NavBar from "../../Components/NavBar";

import NavItem from "./HeaderNavItem";
import HeaderNavMenu from "./HeaderNavMenu";
import HeaderNavToggle from "./HeaderNavToggle";
import NavIcon from "./NavIcon";

const Container = styled(NavBar)`
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: space-between;
  height: auto;
  min-height: 60px;
`;

const HeaderLeftSide = styled.div`
  padding-right: 20px;
`;

const HeaderRightSide = styled.div`
  text-align: right;
  padding-left: 20px;
`;

const Logo = styled.img`
  height: 50px;
  margin: -15px 0 0 0px;

  margin-top: -20px;
  margin-bottom: -20px;
  margin-right: 20px;
`;

export default () => (
  <Container>
    <HeaderLeftSide>
      <FaBars />
    </HeaderLeftSide>
    <HeaderRightSide>
      <HeaderNavMenu>
        <NavItem to="/" exact>
          <NavIcon icon={PersonIcon} />
          <span>Home</span>
        </NavItem>
        <NavItem to="/about">
          <NavIcon icon={PersonIcon} />
          <span>About</span>
        </NavItem>
        <NavItem to="/grid">
          <NavIcon icon={PersonIcon} />
          <span>Grid</span>
        </NavItem>
      </HeaderNavMenu>
    </HeaderRightSide>
  </Container>
);
