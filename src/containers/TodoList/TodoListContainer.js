/* @flow */

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from 'actions';
import TodoList from './TodoList';
class TodoListContainer extends React.Component {
  constructor(props: Object): void {
    super(props);
  }

  componentDidMount(): void {
    if (!this.props.todos.length) {
      this.props.Actions.getTodos();
    }
  }

  onItemToggle(item) {
    this.props.Actions.toggleTodo(item);
  }

  onItemDelete(item) {
    this.props.Actions.deleteTodo(item);
  }

  render() {
    const {todos} = this.props;
    return (
      <TodoList items={todos} onItemToggle={this.onItemToggle.bind(this)} onItemDelete={this.onItemDelete.bind(this)} />
    );
  }
}

function mapStateToProps(state: Object): {todos: Object} {
  console.log('state', state);
  return {
    todos: state.todo.items,
  };
}

function mapDispatchToProps(dispatch: Function): {Actions: Object} {
  return {Actions: bindActionCreators(ActionCreators, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
