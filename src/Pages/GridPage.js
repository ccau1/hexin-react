import React from "react";
import DocumentTitle from "../Components/DocumentTitle";
import ContentContainer from "../Components/ContentContainer";
import { Row, Col } from "react-flexa";
import Card from "../Components/Card";
import H1 from "../Components/H1";
import H2 from "../Components/H2";
import H3 from "../Components/H3";

export default () => (
  <DocumentTitle title={"Grid Page"}>
    <ContentContainer>
      <H1>Grid Page</H1>
      <H2>12 Grid example</H2>
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
      <H2>Responsive Grid</H2>
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
      <H2>List Detail View Example</H2>
      <Row gutter={0} style={{ height: "700px" }}>
        <Col
          xs={12}
          sm={3}
          gutter={0}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div style={{ flex: 1, overflow: "auto" }}>
            <Card>Some Item</Card>
            <Card>Some Item</Card>
            <Card>Some Item</Card>
            <Card>Some Item</Card>
            <Card>Some Item</Card>
            <Card>Some Item</Card>
            <Card>Some Item</Card>
            <Card>Some Item</Card>
            <Card>Some Item</Card>
            <Card>Some Item</Card>
            <Card>Some Item</Card>
            <Card>Some Item</Card>
            <Card>Some Item</Card>
          </div>
        </Col>
        <Col xs={12} sm={9} gutter={0} style={{ display: "flex" }}>
          <Card>
            <Card.Image
              top
              src={
                "https://cdn3.bigcommerce.com/s-hweklwa/product_images/uploaded_images/the-bahamas.jpg?t=1478727778"
              }
              style={{ height: "250px" }}
            />
            <Card.Title>stuff</Card.Title>
            <H3>List Detail View Example</H3>
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
