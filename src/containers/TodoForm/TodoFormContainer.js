/* @flow */

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from 'actions';
import TodoForm from './TodoForm';
class TodoFormContainer extends React.Component {
  constructor(props: Object): void {
    super(props);
  }

  onSubmit(todo) {
    return this.props.Actions.addTodo(todo)
      .then(result => {

      });
  }

  render() {
    return (
      <TodoForm onSubmit={this.onSubmit.bind(this)} />
    );
  }
}

function mapStateToProps(state: Object): {MyProp: Object} {
  return {
    MyProp: state.MyProp
  };
}

function mapDispatchToProps(dispatch: Function): {Actions: Object} {
  return {Actions: bindActionCreators(ActionCreators, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoFormContainer);
