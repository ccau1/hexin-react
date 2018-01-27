import styled from "styled-components";

const ListItemContainer = styled.a`
  padding: ${props => props.theme.measurements.padding}px;
`;

export default props => {
  return <div>Page Content</div>;
};
