import React from 'react';

import DocumentTitle from '../Components/common/DocumentTitle';
import ContentContainer from '../Components/common/ContentContainer';
import H1 from '../Components/common/H1';
import IntlMessages from '../Components/common/IntlMessages';

export default () => (
  <DocumentTitle title={'Localisation Page'}>
    <ContentContainer>
      <H1>Localisation Page</H1>
      <IntlMessages id="languageSwitcher.label" />
    </ContentContainer>
  </DocumentTitle>
);
