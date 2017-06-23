/* @flow */

import React, {Component} from 'react';
import TodoList from 'containers/TodoList';
import TodoForm from 'containers/TodoForm';
import DocumentTitle from 'app/components/DocumentTitle';
import {
  Card,
  CardTitle,
  CardText
} from 'material-ui';
import {FormattedMessage} from 'react-intl';
import messages from './messages';
import styles from './styles';

export default class TodosPage extends Component {
  static propTypes = {

  };

  render() {
    return (
      <DocumentTitle title="Todos">
        <div style={styles.container}>
          <div style={styles.contactContainer}>
            <Card>
              <CardTitle title={<FormattedMessage {...messages.title} />} subtitle={<FormattedMessage {...messages.subtitle} />} />
              <CardText>
                <TodoForm />
                <TodoList />
              </CardText>
            </Card>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
