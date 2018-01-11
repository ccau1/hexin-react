import React from "react";
import LayoutWrapper from "./LayoutWrapper";
import ContentWrapper from "./ContentWrapper";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Footer from "./Footer";

export default ({ children }) => (
  <LayoutWrapper>
    <Sidebar />
    <ContentWrapper>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </ContentWrapper>
  </LayoutWrapper>
);
