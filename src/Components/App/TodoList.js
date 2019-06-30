import React from "react";
import styled from "styled-components";
import Card from "../Card";
import Todo from "./Todo";

const TodoCard = styled(Card)`
  cursor: pointer;
  background-color: ${props => (props.isComplete ? "#f1f1f1" : "#fff")};
`;

export default ({ todos, onItemClick, onDeleteClick }) => {
  return (
    <div>
      {todos.map(todo => (
        <TodoCard
          key={todo.id}
          isComplete={todo.isComplete}
          onClick={onItemClick.bind(this, todo)}
        >
          <Todo
            key={todo.id}
            todo={todo}
            onItemClick={onItemClick}
            onDeleteClick={onDeleteClick}
          />
        </TodoCard>
      ))}
    </div>
  );
};
