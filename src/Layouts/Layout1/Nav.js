import React from "react";
import styled from "styled-components";
import NavItem from "./NavItem";

const NavContainer = styled.div`
  color: ${props => props.theme.color.primary};
  margin-bottom: ${props => 2 * props.theme.unit + "px"};
`;

const Nav = ({ history, styles }) => {
  return (
    <NavContainer>
      <NavItem exact to="/">
        Home
      </NavItem>
      <NavItem to="/about" auth={["member", "admin"]}>
        About
      </NavItem>
      <NavItem to="/grid">Grid</NavItem>
      <NavItem to="/typography">Typography</NavItem>
    </NavContainer>
  );
};

export default Nav;
