import styled from "styled-components";

export default styled.h2`
  display: block;
  font-family: ${props => props.theme.fonts.fontFamily};
  font-size: ${props => props.theme.fonts.size.h2};
  margin: ${props => props.theme.fonts.margin.h2};
  color: ${props => props.theme.fonts.color.h2};
`;
