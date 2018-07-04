/* @flow */

import React from 'react';
import Nav from './Nav';
import styled from 'styled-components';

import NavBar from '../../Components/common/NavBar';
import Image from '../../Components/common/Image';

const SideBarContainer = styled.div`
  width: ${props => 250 * props.theme.unit + 'px'};
  background-color: ${props => props.theme.color.primary};
`;

const SideBarHeader = NavBar.extend`
  background-color: rgba(0, 0, 0, 0.3);
  color: ${props => props.theme.color.primaryText};
  font-size: ${props => 17 * props.theme.unit + 'px'};
  padding: 8px;
`;

export default ({ styles }) => {
  return (
    <SideBarContainer>
      <SideBarHeader>
        <Image src="/images/logo.png" style={{ height: '100%' }} />
      </SideBarHeader>
      <Nav />
    </SideBarContainer>
  );
};
