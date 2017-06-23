/* @flow */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TodoItem from 'components/TodoItem';

export default class TodoList extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      timestamp: PropTypes.number,
      isComplete: PropTypes.bool
    })).isRequired,
    onItemToggle: PropTypes.func.isRequired,
    onItemDelete: PropTypes.func.isRequired
  };

  render() {
    const {items, onItemToggle, onItemDelete} = this.props;
    const sortedItems = items.sort((a, b) => a.timestamp < b.timestamp);
    return (
      <div>
        {sortedItems.map((todo, index) => {
          return <TodoItem key={index} item={todo} onToggle={onItemToggle} onDelete={onItemDelete} />;
        })}
      </div>
    );
  }
}
