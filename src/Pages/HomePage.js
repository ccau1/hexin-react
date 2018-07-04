import React from 'react';

import DocumentTitle from '../Components/common/DocumentTitle';
import ContentContainer from '../Components/common/ContentContainer';
import H1 from '../Components/common/H1';

export default () => (
  <DocumentTitle title={'Home Page'}>
    <ContentContainer>
      <H1>Home Page</H1>
    </ContentContainer>
  </DocumentTitle>
);
