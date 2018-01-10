/* @flow */

import React from "react";
import styled from "styled-components";
// import NavItem from "./NavItem";
import FaChevronLeft from "react-icons/lib/fa/chevron-left";
import FaChevronDown from "react-icons/lib/fa/chevron-down";

const NavItemGroupContainer = styled.div``;

const NavItemGroupChildrenContainer = styled.div`
  padding-left: 20px;
  background-color: rgba(0, 0, 0, 0.4);
`;

const NavItemGroupButton = styled.div`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.65);
  display: block;
  cursor: pointer;
  padding: ${props => 10 * props.theme.unit + "px"}
    ${props => props.theme.screenPadding * props.theme.unit + "px"};
  background-color: transparent;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    color: ${props => props.theme.color.primaryText};
  }
  &.${props => props.activeClassName} {
    background-color: rgba(0, 0, 0, 0.5);
  }
  display: flex;
  justify-content: space-between;
`;

const RightIconContainer = styled.div``;

const NavItemGroupLabel = styled.div``;

export default class NavItemGroup extends React.Component {
  static propTypes = {};

  constructor(props: Object): void {
    super(props);
    this.state = {
      isChildrenVisible: props.isOpen || false
    };
  }

  render() {
    const { isChildrenVisible } = this.state;
    const { label, children } = this.props;
    return (
      <NavItemGroupContainer>
        <NavItemGroupButton
          className={isChildrenVisible ? "active" : null}
          activeClassName={"active"}
          onClick={() =>
            this.setState({ isChildrenVisible: !isChildrenVisible })
          }
        >
          <NavItemGroupLabel>{label}</NavItemGroupLabel>
          <RightIconContainer>
            {isChildrenVisible ? <FaChevronDown /> : <FaChevronLeft />}
          </RightIconContainer>
        </NavItemGroupButton>
        {isChildrenVisible && (
          <NavItemGroupChildrenContainer>
            {children}
          </NavItemGroupChildrenContainer>
        )}
      </NavItemGroupContainer>
    );
  }
}
