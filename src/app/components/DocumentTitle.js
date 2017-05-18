'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import withSideEffect from 'react-side-effect';

function reducePropsToState(propsList) {
  let returnObj = {
    prefix: '',
    suffix: '',
    title: '',
  };
  // TODO:: can be refractored
  propsList.forEach(prop => {
    if (prop.prefix) {
      returnObj.prefix = prop.prefix;
    }
    if (prop.suffix) {
      returnObj.suffix = prop.suffix;
    }
    if (prop.title) {
      returnObj.title = prop.title;
    }
  });
  return returnObj;
}

function handleStateChangeOnClient(obj) {
  var nextTitle = obj.title || '';
  var prefix = obj.prefix || '';
  var suffix = obj.suffix || '';
  let finalTitle = nextTitle;
  if (prefix) {
    finalTitle = prefix + (finalTitle ? ' | ' : '') + finalTitle;
  }
  if (suffix) {
    finalTitle += (finalTitle ? ' | ' : '') + suffix;
  }
  if (finalTitle !== document.title) {
    document.title = finalTitle;
  }
}

class DocumentTitle extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    prefix: PropTypes.string,
    suffix: PropTypes.string,
  }

  render() {
    if (this.props.children) {
      return React.Children.only(this.props.children);
    } else {
      return null;
    }
  }
}

module.exports = withSideEffect(
  reducePropsToState,
  handleStateChangeOnClient
)(DocumentTitle);
