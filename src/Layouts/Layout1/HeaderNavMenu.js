import React from "react";
import styled from "styled-components";
import { NavItemStyled } from "./HeaderNavItem";

const NavMenuContainer = styled.div`
  flex: 1;
  text-align: ${props => (props.right ? "right" : "left")};
  @media (max-width: 700px) {
    flex: 1 100%;
    order: 3;
    overflow-y: auto;
    text-align: left;
    max-height: ${props => (props.isOpen ? "350px" : "0")};
    & ${NavItemStyled} {
      display: block;
      margin: 0;
    }
    margin-top: ${props => (props.isOpen ? "30px" : "0")};
  }
  transition: all 0.25s;
`;

const NavMenu = styled.div`
  display: inline-block;
  flex: 1;
  @media (max-width: 700px) {
    display: block;
    & ${NavItemStyled} {
      display: block;
      margin: 0;
    }
  }
`;

export default class HeaderNavMenu extends React.Component {
  static propTypes = {};

  render() {
    const { children, isOpen, right } = this.props;
    return (
      <NavMenuContainer right={right} isOpen={isOpen}>
        <NavMenu>{children}</NavMenu>
      </NavMenuContainer>
    );
  }
}
