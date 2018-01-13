/* @flow */

import React from "react";

import DocumentTitle from "../Components/DocumentTitle";
import ContentContainer from "../Components/ContentContainer";
import Input from "../Components/Input";
import Button from "../Components/Button";
import Image from "../Components/Image";

export default () => (
  <DocumentTitle title={"Login Page"}>
    <Image src="/images/logo.png" height={100} />
    <ContentContainer>
      <Input placeholder={"Username"} />
      <Input placeholder={"Password"} />
      <Button.Primary>Sign In</Button.Primary>
    </ContentContainer>
  </DocumentTitle>
);
