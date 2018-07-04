import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FaBars from 'react-icons/lib/fa/bars';
import LinkBase from '../../Components/common/Link';

const Link = styled(LinkBase)`
  @media (min-width: 700px) {
    display: none;
  }
`;

export default class HeaderNavToggle extends React.Component {
  static propTypes = {
    onToggle: PropTypes.func
  };

  render() {
    const { onToggle } = this.props;
    return (
      <Link round onClick={onToggle.bind(this, undefined)}>
        <FaBars />
      </Link>
    );
  }
}
