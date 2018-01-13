import styled from "styled-components";

export default styled.h4`
  display: block;
  font-family: ${props => props.theme.fonts.fontFamily};
  font-size: ${props => props.theme.fonts.size.h4};
  margin: ${props => props.theme.fonts.margin.h4};
  color: ${props => props.theme.fonts.color.h4};
`;
