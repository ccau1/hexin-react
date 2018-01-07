/* @flow */

import React, { Component } from "react";
import LayoutWrapper from "./LayoutWrapper";
import ContentWrapper from "./ContentWrapper";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Footer from "./Footer";

export default class Layout extends Component {
  static propTypes = {};

  render() {
    return (
      <LayoutWrapper>
        <Sidebar />
        <ContentWrapper>
          <Header />
          <Content>{this.props.children}</Content>
          <Footer />
        </ContentWrapper>
      </LayoutWrapper>
    );
  }
}
