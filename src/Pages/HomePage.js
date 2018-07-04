import React from 'react';

import DocumentTitle from '../Components/DocumentTitle';
import ContentContainer from '../Components/ContentContainer';
import H1 from '../Components/H1';

export default () => (
  <DocumentTitle title={'Home Page'}>
    <ContentContainer>
      <H1>Home Page</H1>
    </ContentContainer>
  </DocumentTitle>
);
