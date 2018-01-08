import React from "react";
import DocumentTitle from "../Components/DocumentTitle";
import ContentContainer from "../Components/ContentContainer";
import Card from "../Components/Card";
import { Row, Col } from "react-flexa";
import H from "../Components/H";

export default () => (
  <DocumentTitle title={"Grid Page"}>
    <ContentContainer>
      <H h={1}>Grid Page</H>
      <H h={2}>12 Grid example</H>
      <Row>
        <Col xs={2}>
          <Card>Col 2</Card>
        </Col>
        <Col xs={2}>
          <Card>Col 2</Card>
        </Col>
        <Col xs={2}>
          <Card>Col 2</Card>
        </Col>
        <Col xs={2}>
          <Card>Col 2</Card>
        </Col>
        <Col xs={2}>
          <Card>Col 2</Card>
        </Col>
        <Col xs={2}>
          <Card>Col 2</Card>
        </Col>
      </Row>
      <H h={2}>Responsive Grid</H>
      <Row>
        <Col xs={12} sm={3} md={4}>
          <Card>Col 1</Card>
        </Col>
        <Col xs={12} sm={3} md={4}>
          <Card>Col 2</Card>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Card>Col 3</Card>
        </Col>
      </Row>
      <H h={2}>List Detail View Example</H>
      <Row gutter={0}>
        <Col xs={12} sm={3} gutter={0}>
          <Card>Some Item</Card>
          <Card>Some Item</Card>
          <Card>Some Item</Card>
          <Card>Some Item</Card>
          <Card>Some Item</Card>
        </Col>
        <Col xs={12} sm={9} gutter={0} style={{ display: "flex" }}>
          <Card>
            <H h={3}>List Detail View Example</H>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
            pharetra mi. Cras nunc nulla, vulputate malesuada libero ut, gravida
            porttitor tortor. Proin fermentum ullamcorper justo. Morbi sed enim
            felis. Suspendisse id viverra nulla. Curabitur tincidunt nisl nec
            leo tincidunt ultricies. In nec eleifend diam, finibus rutrum neque.
            In dignissim magna eget nunc lobortis, eget bibendum libero
            elementum. Nam faucibus, nisi sed porta egestas, velit eros
            sollicitudin tortor, nec elementum libero erat in lacus.
          </Card>
        </Col>
      </Row>
    </ContentContainer>
  </DocumentTitle>
);
