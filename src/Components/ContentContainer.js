import styled from "styled-components";

export default styled.div`
  padding: ${props =>
    props.theme.measurements.padding +
    "px " +
    props.theme.measurements.padding +
    "px " +
    props.theme.measurements.padding * 3 +
    "px " +
    props.theme.measurements.padding +
    "px"};
  flex: 1;
`;
