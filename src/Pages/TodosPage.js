import React from "react";
import { FirestoreCollection } from "react-firestore";

import DocumentTitle from "../Components/DocumentTitle";
import ContentContainer from "../Components/ContentContainer";
import Loading from "../Components/Loading";
import H1 from "../Components/H1";
import Card from "../Components/Card";
import { db } from "../Services/firebase";
import TodoList from "../Components/App/TodoList";
import TodoForm from "../Components/App/TodoForm";
import { reset } from "redux-form";
import { Row, Col } from "react-flexa";
import Collection from "../Constants/Collection";
import Form from "../Constants/Form";

export default () => {
  const todos = db.collection(Collection.TODOS);
  return (
    <DocumentTitle title={"Todos Page"}>
      <ContentContainer>
        <Row>
          <Col xs={12} md={6}>
            <H1>Todos Page</H1>
            <Card>
              <TodoForm
                onSubmit={item => {
                  todos.add({ ...item, createdAt: new Date() });
                  reset(Form.TODO);
                }}
              />
            </Card>
            <FirestoreCollection
              path="todos"
              sort="createdAt:desc,task"
              render={({ isLoading, data }) => {
                return isLoading ? (
                  <Loading />
                ) : (
                  <TodoList
                    todos={data}
                    onItemClick={todo =>
                      todos.doc(todo.id).update({
                        isComplete: !todo.isComplete
                      })
                    }
                    onDeleteClick={todo => todos.doc(todo.id).delete()}
                  />
                );
              }}
            />
          </Col>
        </Row>
      </ContentContainer>
    </DocumentTitle>
  );
};
