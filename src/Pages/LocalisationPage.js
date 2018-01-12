import React from "react";

import DocumentTitle from "../Components/DocumentTitle";
import ContentContainer from "../Components/ContentContainer";
import H1 from "../Components/Dom/H1";
import IntlMessages from "../Components/IntlMessages";
import LocaleSwitcher from "../Containers/LocaleSwitcher";

export default () => (
  <DocumentTitle title={"Localisation Page"}>
    <ContentContainer>
      <H1>Localisation Page</H1>
      <LocaleSwitcher />
      <br />
      <IntlMessages id="languageSwitcher.label" />
    </ContentContainer>
  </DocumentTitle>
);
