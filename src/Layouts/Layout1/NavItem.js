import React from 'react';
import { NavLink } from '../../Lib/route';
import styled from 'styled-components';

const NavItem = styled(NavLink)`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.65);
  display: block;
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
`;

export default props => {
  return <NavItem {...props} activeClassName={'active'} />;
};
