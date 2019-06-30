import React from "react";
import styled from "styled-components";
import H5 from "../H5";
import Small from "../Small";
import Button from "../Button";

const TodoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftPanel = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const TodoContent = styled.div`
  flex: 1;
  text-decoration: ${props => (props.isComplete ? "line-through" : "none")};
`;

const RightPanel = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export default ({ todo, onItemClick, onDeleteClick }) => {
  const _onDeleteClick = (todo, ev) => {
    ev.stopPropagation();
    onDeleteClick(todo);
  };
  return (
    <TodoContainer>
      <LeftPanel>
        <input type="checkbox" readOnly checked={todo.isComplete} />
      </LeftPanel>
      <TodoContent isComplete={todo.isComplete}>
        <H5>{todo.task}</H5>
        <Small>
          Created At:{" "}
          {todo.createdAt !== undefined
            ? todo.createdAt.toLocaleString()
            : "----"}
        </Small>
        <Small>
          Last Modified:{" "}
          {todo.lastModified !== undefined
            ? todo.lastModified.toLocaleString()
            : "----"}
        </Small>
      </TodoContent>
      <RightPanel>
        <Button.Secondary onClick={_onDeleteClick.bind(this, todo)}>
          Delete
        </Button.Secondary>
      </RightPanel>
    </TodoContainer>
  );
};
