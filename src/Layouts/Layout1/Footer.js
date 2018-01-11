/* @flow */

import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  padding: ${props => 25 * props.theme.unit + "px"};
  background-color: ${props => props.theme.contentBackground};
  text-align: center;
  border-top-color: rgba(0, 0, 0, 0.1);
  border-top-width: ${props => 1 * props.theme.unit + "px"};
  border-top-style: solid;
`;

export default () => <FooterContainer>Footer</FooterContainer>;
