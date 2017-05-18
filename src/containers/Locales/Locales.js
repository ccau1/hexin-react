/* @flow */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

export default class Locales extends Component {
  static propTypes = {
    locales: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      text: PropTypes.string,
    })).isRequired,
    currentLocale: PropTypes.string,
    onChange: PropTypes.func,
  };

  render() {
    const {locales, currentLocale, onChange} = this.props;

    return (
      <div style={styles.container}>
        {
          locales.map(locale => {
            return (
              <button key={locale.key} onClick={onChange.bind(this, locale.key)} style={{...styles.btnLocale, ...(locale.key === currentLocale ? styles.btnLocaleActive : {})}}>
                <span style={{...styles.btnTextLocale, ...(locale.key === currentLocale ? styles.btnTextLocaleActive : {})}}>{locale.text}</span>
              </button>
            );
          })}
      </div>
    );
  }
}
