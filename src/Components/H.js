import styled from "styled-components";

export default styled.span`
  display: block;
  font-family: ${props => props.theme.fonts.fontFamily};
  font-size: ${props =>
    props.theme.fonts.size["h" + props.h] || props.theme.fonts.size.h1};
  margin: ${props =>
    props.theme.fonts.margin["h" + props.h] || props.theme.fonts.margin.h1};
  color: ${props =>
    props.theme.fonts.color["h" + props.h] || props.theme.fonts.color.h1};
`;
