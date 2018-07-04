/* @flow */

import React from 'react';

import DocumentTitle from '../Components/common/DocumentTitle';
import ContentContainer from '../Components/common/ContentContainer';
import H1 from '../Components/common/H1';

export default () => (
  <DocumentTitle title={'About Page'}>
    <ContentContainer>
      <H1>About Page</H1>
    </ContentContainer>
  </DocumentTitle>
);
