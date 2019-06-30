import React from "react";

import DocumentTitle from "../Components/DocumentTitle";
import ContentContainer from "../Components/ContentContainer";
import H1 from "../Components/H1";
import Card from "../Components/Card";
import TodoList from "../Containers/TodoList";
import TodoForm from "../Containers/TodoForm";
import { Row, Col } from "react-flexa";

export default () => {
  return (
    <DocumentTitle title={"Todos Page"}>
      <ContentContainer>
        <Row>
          <Col xs={12} md={6}>
            <H1>Todos Page</H1>
            <Card>
              <TodoForm />
            </Card>
            <TodoList />
          </Col>
        </Row>
      </ContentContainer>
    </DocumentTitle>
  );
};
