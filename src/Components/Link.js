import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BasicLink = styled.a`
  cursor: pointer;
  color: ${props => props.theme.color.primary};
  text-decoration: none;
`;

const LinkStyled = styled(Link)`
  cursor: pointer;
  color: ${props => props.theme.color.primary};
  text-decoration: none;
`;

export default props =>
  props.to ? <LinkStyled {...props} /> : <BasicLink {...props} />;
