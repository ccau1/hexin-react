import React from "react";

import DocumentTitle from "../Components/DocumentTitle";
import ContentContainer from "../Components/ContentContainer";
import H from "../Components/H";

export default () => (
  <DocumentTitle title={"Home Page"}>
    <ContentContainer>
      <H h={1}>Home Page</H>
    </ContentContainer>
  </DocumentTitle>
);
