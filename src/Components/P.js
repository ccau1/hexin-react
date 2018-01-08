import styled from "styled-components";

export default styled.span`
  font-family: ${props => props.theme.fonts.fontFamily};
  font-size: ${props => props.theme.fonts.size.p};
  color: ${props => props.theme.fonts.color.p};
`;
