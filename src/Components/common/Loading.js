import React from 'react';
import Loading from 'react-loading';
import styled, { withTheme } from 'styled-components';

const LoadingContainer = styled.div`
  margin: 0 auto;
  width: ${props => props.width}px;
`;

export default withTheme(({ width, height, type = 'bubbles', theme }) => {
  return (
    <LoadingContainer width={width || theme.measurements.loading.width}>
      <Loading
        type={type}
        color={theme.color.secondary}
        height={height || theme.measurements.loading.height}
        width={width || theme.measurements.loading.width}
      />
    </LoadingContainer>
  );
});
