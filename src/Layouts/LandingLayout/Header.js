import React from 'react';
import styled from 'styled-components';
import Header from '../../Components/common/Header';

const HeaderStyled = styled(Header)`
  background: rgba(0, 0, 0, 0.1);
  transition: background 1s;
  &.stiff {
    background: rgba(0, 0, 0, 0.3);
  }
`;

export default class Headerr extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPassedThreshold: false
    };
  }
  render() {
    return (
      <HeaderStyled
        fixed
        toFixedThreshold={300}
        belowThresholdClassname={'stiff'}
        onThresholdChange={isPassedThreshold =>
          this.setState({ isPassedThreshold })
        }
      >
        {this.state.isPassedThreshold ? (
          <b>Bigger Ambitions!!</b>
        ) : (
          <b>Big Ambition</b>
        )}
      </HeaderStyled>
    );
  }
}
