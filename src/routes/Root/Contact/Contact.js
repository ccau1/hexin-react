import React from 'react';
import styles from './styles';
import ContactForm from 'containers/ContactForm';
import DocumentTitle from 'app/components/DocumentTitle';
import {
  Card,
  CardTitle,
  CardText,
} from 'material-ui';
import {
  FormattedMessage,
} from 'react-intl';
import messages from './messages';

export default (props: Object) => {
  return (
    <DocumentTitle title="Contact">
      <div style={styles.container}>
        <div style={styles.contactContainer}>
          <Card>
            <CardTitle title={<FormattedMessage {...messages.title} />} subtitle="It is contact page" />
            <CardText>
              <ContactForm />
            </CardText>
          </Card>
        </div>
      </div>
    </DocumentTitle>
  );
};
