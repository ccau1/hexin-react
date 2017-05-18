/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import App, {preInit, init, postInit} from 'app';

document.addEventListener('DOMContentLoaded', function() {
  preInit()
  .then(result => {
    ReactDOM.render(
      React.createElement(App),
      document.getElementById('app'),
      postInit,
    );
    init();
  });
});
