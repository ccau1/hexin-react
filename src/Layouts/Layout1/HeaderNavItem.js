import React from 'react';
import { NavLink } from '../../Lib/route';
import styled from 'styled-components';

export const NavItemStyled = styled(NavLink)`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.65);
  display: inline-block;
  position: relative;
  cursor: pointer;
  padding: ${props => 10 * props.theme.unit + 'px'}
    ${props => props.theme.measurements.padding + 'px'};
  background-color: transparent;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    color: ${props => props.theme.color.primaryText};
  }
  &.${props => props.activeClassName} {
    background-color: rgba(0, 0, 0, 0.5);
  }
  box-sizing: border-box;
  min-height: 40px;
  padding-left: 40px;
  overflow: hidden;

  & svg {
    position: absolute;
    top: 10px;
    left: 18px;
  }
  & span {
    min-width: 250px;
  }
  /* different from NavItem */
  margin: -15px 0 -16px 0;
  color: ${props => props.theme.color.primaryHighlight};
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
    color: ${props => props.theme.color.primaryHighlight};
  }
  &.${props => props.activeClassName} {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export default props => {
  return <NavItemStyled {...props} activeClassName={'active'} />;
};
