import styled from "styled-components";

export default styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px;
  background: ${props => props.theme.color.contentBackground};
  margin: 0 -1px -1px 0;
`;
