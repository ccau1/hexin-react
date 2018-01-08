/* @flow */

import React from "react";

import DocumentTitle from "../Components/DocumentTitle";
import ContentContainer from "../Components/ContentContainer";
import H from "../Components/H";

export default () => (
  <DocumentTitle title={"About Page"}>
    <ContentContainer>
      <H h={1}>About Page</H>
    </ContentContainer>
  </DocumentTitle>
);
