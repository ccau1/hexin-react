
/* @flow */
import React from 'react';
import styles from './styles';
import {
  H2,
} from 'app/components';
import {FormattedMessage} from 'react-intl';
import Locales from 'containers/Locales';
import messages from './messages';
import DocumentTitle from 'app/components/DocumentTitle';

export default (props: Object) => {
  return (
    <DocumentTitle title="Home">
      <div style={styles.container}>
        <H2 style={styles.header}>
          <FormattedMessage {...messages.helloworld} />
        </H2>
        <br />
        <Locales />
      </div>
    </DocumentTitle>
  );
};
