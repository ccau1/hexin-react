/* @flow */

import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Routes from 'routes/Routes';

export default (props: Object) => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};
