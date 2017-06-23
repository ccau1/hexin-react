/* @flow */

import React from 'react';
import {FormattedRelative} from 'react-intl';
import styles from './styles';
import {
  P,
  H3,
  Button
} from 'app/components';
import {FormattedMessage} from 'react-intl';
import messages from './messages';

export default ({item, onToggle, onDelete}: Object) => {
  return (
    <div style={styles.container}>
      <H3 style={item.isComplete ? styles.completed : {}} onClick={onToggle.bind(this, item)}>{item.name}</H3>
      <P><FormattedRelative value={item.timestamp} /></P>
      <Button.Primary onClick={onDelete.bind(this, item)}><FormattedMessage {...messages.delete} /></Button.Primary>
    </div>
  );
};
