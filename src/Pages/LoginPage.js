/* @flow */

import React from "react";

import DocumentTitle from "../Components/DocumentTitle";
import ContentContainer from "../Components/ContentContainer";
import LoginForm from "../Containers/LoginForm";
import Image from "../Components/Image";

export default () => (
  <DocumentTitle title={"Login Page"}>
    <Image src="/images/logo.png" height={100} />
    <ContentContainer>
      <LoginForm />
    </ContentContainer>
  </DocumentTitle>
);
