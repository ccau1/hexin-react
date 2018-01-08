import React, { Component } from "react";
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import theme from "../Themes";
import DocumentTitle from "../Components/DocumentTitle";

class App extends Component {
  render() {
    return (
      <DocumentTitle prefix={"HEXIN: "} title={"loading..."}>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </DocumentTitle>
    );
  }
}

export default App;
