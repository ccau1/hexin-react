import React from "react";
import styled from "styled-components";

const VerticalSeparator = styled.div`
  border-left: 1px solid #bdbdbd;
  padding: 2px;
  display: inline-block;
  height: 100%;
  box-sizing: border-box;
`;

const HorizontalSeparator = styled.div`
  border-top: 1px solid #bdbdbd;
  padding: 2px;
  box-sizing: border-box;
`;

export default props => {
  return props.vertical ? <VerticalSeparator /> : <HorizontalSeparator />;
};
