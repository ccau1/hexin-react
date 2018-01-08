import styled from "styled-components";

export default styled.div`
  padding: ${props =>
    props.theme.screenPadding +
    "px " +
    props.theme.screenPadding +
    "px " +
    props.theme.screenPadding * 3 +
    "px " +
    props.theme.screenPadding +
    "px"};
  flex: 1;
`;
