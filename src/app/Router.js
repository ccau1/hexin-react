/* @flow */

import React, { Component } from 'react';
// import { BrowserRouter as Router } from "react-router-dom";

import { ConnectedRouter } from 'react-router-redux';
import { browserHistory } from '../Redux';
import Routes from '../Routes';

export default class _Router extends Component {
  static propTypes = {};

  render() {
    return (
      <ConnectedRouter history={browserHistory}>
        <Routes />
      </ConnectedRouter>
    );
  }
}
