/* @flow */

import React from 'react';
import DocumentTitle from '../Components/common/DocumentTitle';
import ContentContainer from '../Components/common/ContentContainer';
import { Row, Col } from 'react-flexa';
import H1 from '../Components/common/H1';
import H2 from '../Components/common/H2';
import H3 from '../Components/common/H3';
import H4 from '../Components/common/H4';
import H5 from '../Components/common/H5';
import H6 from '../Components/common/H6';
import P from '../Components/common/P';
import Hr from '../Components/common/Hr';

export default () => (
  <DocumentTitle title={'Typography Page'}>
    <ContentContainer>
      <H1>Typography Page</H1>
      <Hr />
      <H1>Header 1</H1>
      <H2>Header 2</H2>
      <H3>Header 3</H3>
      <H4>Header 4</H4>
      <H5>Header 5</H5>
      <H6>Header 6</H6>
      <P>Paragraph</P>
      <br />
      <Row>
        <Col sm={6}>
          <H3>Header 3</H3>
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
          <H3>Header 3</H3>
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
          <H3>Header 3</H3>
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
          <H3>Header 3</H3>
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
          <H3>Header 3</H3>
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
