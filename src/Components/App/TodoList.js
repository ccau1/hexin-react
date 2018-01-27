import React from "react";
import styled from "styled-components";
import Card from "../Card";
import H5 from "../H5";
import P from "../P";
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

const TodoCard = styled(Card)`
  cursor: pointer;
  background-color: ${props => (props.isComplete ? "#f1f1f1" : "#fff")};
`;

export default ({ todos, onItemClick, onDeleteClick }) => {
  const _onDeleteClick = (todo, ev) => {
    ev.stopPropagation();
    onDeleteClick(todo);
  };
  return (
    <div>
      {todos.map(todo => (
        <TodoCard
          key={todo.id}
          isComplete={todo.isComplete}
          onClick={onItemClick.bind(this, todo)}
        >
          <TodoContainer>
            <LeftPanel>
              <input type="checkbox" readOnly checked={todo.isComplete} />
            </LeftPanel>
            <TodoContent isComplete={todo.isComplete}>
              <H5>{todo.task}</H5>
              <P>{todo.createdAt.toString()}</P>
            </TodoContent>
            <RightPanel>
              <Button.Secondary onClick={_onDeleteClick.bind(this, todo)}>
                Delete
              </Button.Secondary>
            </RightPanel>
          </TodoContainer>
        </TodoCard>
      ))}
    </div>
  );
};
