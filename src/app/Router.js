/* @flow */

import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../Routes";

export default class _Router extends Component {
  static propTypes = {};

  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
}
