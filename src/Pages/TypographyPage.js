/* @flow */

import React from "react";
import DocumentTitle from "../Components/DocumentTitle";
import ContentContainer from "../Components/ContentContainer";
import { Row, Col } from "react-flexa";
import H from "../Components/H";
import P from "../Components/P";
import Hr from "../Components/Hr";

export default () => (
  <DocumentTitle title={"Typography Page"}>
    <ContentContainer>
      <H h={1}>Typography Page</H>
      <Hr />
      <H h={1}>Header 1</H>
      <H h={2}>Header 2</H>
      <H h={3}>Header 3</H>
      <H h={4}>Header 4</H>
      <H h={5}>Header 5</H>
      <H h={6}>Header 6</H>
      <P>Paragraph</P>
      <br />
      <Row>
        <Col sm={6}>
          <H h={3}>Header 3</H>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
            pharetra mi. Cras nunc nulla, vulputate malesuada libero ut, gravida
            porttitor tortor. Proin fermentum ullamcorper justo. Morbi sed enim
            felis. Suspendisse id viverra nulla. Curabitur tincidunt nisl nec
            leo tincidunt ultricies. In nec eleifend diam, finibus rutrum neque.
            In dignissim magna eget nunc lobortis, eget bibendum libero
            elementum. Nam faucibus, nisi sed porta egestas, velit eros
            sollicitudin tortor, nec elementum libero erat in lacus.
          </P>
        </Col>
        <Col sm={6}>
          <H h={3}>Header 3</H>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
            pharetra mi. Cras nunc nulla, vulputate malesuada libero ut, gravida
            porttitor tortor. Proin fermentum ullamcorper justo. Morbi sed enim
            felis. Suspendisse id viverra nulla. Curabitur tincidunt nisl nec
            leo tincidunt ultricies. In nec eleifend diam, finibus rutrum neque.
            In dignissim magna eget nunc lobortis, eget bibendum libero
            elementum. Nam faucibus, nisi sed porta egestas, velit eros
            sollicitudin tortor, nec elementum libero erat in lacus.
          </P>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <H h={3}>Header 3</H>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
            pharetra mi. Cras nunc nulla, vulputate malesuada libero ut, gravida
            porttitor tortor. Proin fermentum ullamcorper justo. Morbi sed enim
            felis. Suspendisse id viverra nulla. Curabitur tincidunt nisl nec
            leo tincidunt ultricies. In nec eleifend diam, finibus rutrum neque.
            In dignissim magna eget nunc lobortis, eget bibendum libero
            elementum. Nam faucibus, nisi sed porta egestas, velit eros
            sollicitudin tortor, nec elementum libero erat in lacus.
          </P>
        </Col>
        <Col sm={4}>
          <H h={3}>Header 3</H>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
            pharetra mi. Cras nunc nulla, vulputate malesuada libero ut, gravida
            porttitor tortor. Proin fermentum ullamcorper justo. Morbi sed enim
            felis. Suspendisse id viverra nulla. Curabitur tincidunt nisl nec
            leo tincidunt ultricies. In nec eleifend diam, finibus rutrum neque.
            In dignissim magna eget nunc lobortis, eget bibendum libero
            elementum. Nam faucibus, nisi sed porta egestas, velit eros
            sollicitudin tortor, nec elementum libero erat in lacus.
          </P>
        </Col>
        <Col sm={4}>
          <H h={3}>Header 3</H>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
            pharetra mi. Cras nunc nulla, vulputate malesuada libero ut, gravida
            porttitor tortor. Proin fermentum ullamcorper justo. Morbi sed enim
            felis. Suspendisse id viverra nulla. Curabitur tincidunt nisl nec
            leo tincidunt ultricies. In nec eleifend diam, finibus rutrum neque.
            In dignissim magna eget nunc lobortis, eget bibendum libero
            elementum. Nam faucibus, nisi sed porta egestas, velit eros
            sollicitudin tortor, nec elementum libero erat in lacus.
          </P>
        </Col>
      </Row>
    </ContentContainer>
  </DocumentTitle>
);
