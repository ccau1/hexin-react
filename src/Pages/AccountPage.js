/* @flow */

import React from 'react';

import DocumentTitle from '../Components/DocumentTitle';
import ContentContainer from '../Components/ContentContainer';
import H1 from '../Components/H1';

export default () => (
  <DocumentTitle title={'My Account'}>
    <ContentContainer>
      <H1>My Account</H1>
    </ContentContainer>
  </DocumentTitle>
);
