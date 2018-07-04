/* @flow */

import React from 'react';
import styled from 'styled-components';
import DocumentTitle from '../Components/DocumentTitle';

const PlaceHolder = styled.div`
  height: ${props => (props.height || '300') + 'px'};
  background-color: ${props => props.bg || '#fff'};
  padding: 10px;
`;

export default (props: Object) => {
  return (
    <DocumentTitle title={'Landing Page'}>
      <PlaceHolder bg={'#f88'} height={800} />
      <PlaceHolder />
      <PlaceHolder bg={'#f66'} />
      <PlaceHolder />
      <PlaceHolder />
      <PlaceHolder />
      <PlaceHolder />
      <PlaceHolder />
      <PlaceHolder />
      <PlaceHolder />
      <PlaceHolder />
      <PlaceHolder />
      <PlaceHolder />
      <PlaceHolder />
      <PlaceHolder />
      <PlaceHolder />
      <PlaceHolder />
      <PlaceHolder />
      <PlaceHolder />
      <PlaceHolder />
    </DocumentTitle>
  );
};
