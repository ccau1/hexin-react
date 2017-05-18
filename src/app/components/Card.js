import styled from 'styled-components';

export default styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: ${props => props.hover ? '0 8px 16px 0 rgba(0,0,0,0.2)' : '0 4px 8px 0 rgba(0,0,0,0.2)'};
  }
`;
