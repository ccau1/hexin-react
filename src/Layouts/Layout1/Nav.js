import React from 'react';
import styled from 'styled-components';
import NavItem from './NavItem';
import NavItemGroup from './NavItemGroup';

const NavContainer = styled.div`
  color: ${props => props.theme.color.primary};
  margin-bottom: ${props => 2 * props.theme.unit + 'px'};
`;

const Nav = ({ history, styles }) => {
  return (
    <NavContainer>
      <NavItem exact to="/">
        Home
      </NavItem>
      <NavItem exact to="/localisation">
        Localisation
      </NavItem>
      <NavItem to="/about" auth={['member', 'admin']}>
        About
      </NavItem>
      <NavItemGroup label={'Components'}>
        <NavItem to="/grid">Grid</NavItem>
        <NavItem to="/typography">Typography</NavItem>
      </NavItemGroup>
      <NavItem to="/landing-page">Landing Page</NavItem>
    </NavContainer>
  );
};

export default Nav;
