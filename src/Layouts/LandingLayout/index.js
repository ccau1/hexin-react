/* @flow */

import React from 'react';
import Layout from './Layout';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export default ({ children }) => {
  return (
    <Layout>
      <Header />
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};
