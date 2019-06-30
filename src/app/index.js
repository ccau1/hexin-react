import React, { Component } from "react";
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import Intl from "./Intl";
import ReduxProvider from "./ReduxProvider";
import theme from "../Themes";
import DocumentTitle from "../Components/DocumentTitle";
import FirestoreProvider from "./FirestoreProvider";

class App extends Component {
  render() {
    return (
      <ReduxProvider>
        <FirestoreProvider>
          <Intl>
            <DocumentTitle prefix={"HEXIN "} title={"loading..."}>
              <ThemeProvider theme={theme}>
                <Router />
              </ThemeProvider>
            </DocumentTitle>
          </Intl>
        </FirestoreProvider>
      </ReduxProvider>
    );
  }
}

export default App;
