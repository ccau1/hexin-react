/* @flow */

import React from "react";

import DocumentTitle from "../Components/DocumentTitle";
import ContentContainer from "../Components/ContentContainer";
import H1 from "../Components/H1";

export default () => (
  <DocumentTitle title={"About Page"}>
    <ContentContainer>
      <H1>About Page</H1>
    </ContentContainer>
  </DocumentTitle>
);
