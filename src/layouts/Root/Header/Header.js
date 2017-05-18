/* @flow */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import Locales from 'containers/Locales';

export default class Header extends Component {
  static propTypes = {
    user: PropTypes.object,
    menu: PropTypes.object,
  };

  render() {
    const {menu} = this.props;
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <Locales />
        </div>
        {menu}
        {/* <Locales /> */}
      </div>
    );
  }
}
