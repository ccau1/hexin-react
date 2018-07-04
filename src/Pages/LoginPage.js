/* @flow */

import React from 'react';

import DocumentTitle from '../Components/common/DocumentTitle';
import ContentContainer from '../Components/common/ContentContainer';
import Input from '../Components/common/Input';
import Button from '../Components/common/Button';
import Image from '../Components/common/Image';

export default () => (
  <DocumentTitle title={'Login Page'}>
    <Image src="/images/logo.png" height={100} />
    <ContentContainer>
      <Input placeholder={'Username'} />
      <Input placeholder={'Password'} />
      <Button.Primary>Sign In</Button.Primary>
    </ContentContainer>
  </DocumentTitle>
);
