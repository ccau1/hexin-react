import React from 'react';

import DocumentTitle from '../Components/DocumentTitle';
import ContentContainer from '../Components/ContentContainer';
import H1 from '../Components/H1';
import IntlMessages from '../Components/IntlMessages';

export default () => (
  <DocumentTitle title={'Localisation Page'}>
    <ContentContainer>
      <H1>Localisation Page</H1>
      <IntlMessages id="languageSwitcher.label" />
    </ContentContainer>
  </DocumentTitle>
);
