import React from 'react';
import styled from 'styled-components';
import NavItem from './NavItem';
import NavItemGroup from './NavItemGroup';
import IntlMessages from '../../Components/IntlMessages';

const NavContainer = styled.div`
  color: ${props => props.theme.color.primary};
  margin-bottom: ${props => 2 * props.theme.unit + 'px'};
  span {
    display: ${props => (props.isOpen ? 'block' : 'none')};
  }
  @media (max-width: ${props => props.theme.media.sm}px) {
  }
`;

const Nav = ({ history, isOpen, styles }) => {
  return (
    <NavContainer isOpen={isOpen}>
      <NavItem exact to="/">
        <IntlMessages id={'nav.home'} />
      </NavItem>
      <NavItem exact to="/localisation">
        <IntlMessages id={'nav.localisation'} />
      </NavItem>
      <NavItem to="/about" auth={['member', 'admin']}>
        <IntlMessages id={'nav.about'} />
      </NavItem>
      <NavItemGroup label={<IntlMessages id={'nav.components'} />}>
        <NavItem to="/grid">
          <IntlMessages id={'nav.grid'} />
        </NavItem>
        <NavItem to="/typography">
          <IntlMessages id={'nav.typography'} />
        </NavItem>
      </NavItemGroup>
      <NavItem to="/landing-page">
        <IntlMessages id={'nav.landingpage'} />
      </NavItem>
    </NavContainer>
  );
};

export default Nav;
