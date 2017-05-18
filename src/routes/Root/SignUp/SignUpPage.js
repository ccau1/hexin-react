import React from 'react';
import styles from './styles';
import SignUpForm, {SignUpFormSuccess} from 'containers/SignUpForm';
import DocumentTitle from 'app/components/DocumentTitle';
import {
  Card,
  CardTitle,
  CardText,
} from 'material-ui';
import messages from './messages';

import {
  FormattedMessage,
} from 'react-intl';


export default (props: Object) => {
  const {user, redirect} = props;
  if (user) {
    return (
      <DocumentTitle title="Sign Up Success!">
        <SignUpFormSuccess redirect={redirect || '/'} counter={4} />
      </DocumentTitle>
    );
  } else {
    return (
      <DocumentTitle title="Sign Up">
        <div style={styles.container}>
          <div style={styles.signUpContainer}>
            <Card>
              <CardTitle title={<FormattedMessage {...messages.title} />} subtitle="To be our newest friend!" />
              <CardText>
                <SignUpForm />
              </CardText>
            </Card>
          </div>
        </div>
      </DocumentTitle>
    );
  }
};
