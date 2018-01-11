import React, { Component } from "react";
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import Intl from "./Intl";
import theme from "../Themes";
import DocumentTitle from "../Components/DocumentTitle";

class App extends Component {
  render() {
    return (
      <Intl>
        <DocumentTitle prefix={"HEXIN: "} title={"loading..."}>
          <ThemeProvider theme={theme}>
            <Router />
          </ThemeProvider>
        </DocumentTitle>
      </Intl>
    );
  }
}

export default App;
