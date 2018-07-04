/* @flow */

import React from 'react';

import DocumentTitle from '../Components/common/DocumentTitle';
import ContentContainer from '../Components/common/ContentContainer';
import H1 from '../Components/common/H1';

export default () => (
  <DocumentTitle title={'My Account'}>
    <ContentContainer>
      <H1>My Account</H1>
    </ContentContainer>
  </DocumentTitle>
);
