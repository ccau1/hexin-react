/* @flow */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Locales from './Locales';
import {ActionCreators} from 'actions';
import type {IntlState} from 'src/types';

class LocalesContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  setLocale(lang) {
    this.props.Actions.setCurrentLocale(lang);
  }

  render() {
    const {intl} = this.props;

    return (
      <div>
        <Locales locales={intl.locales} currentLocale={intl.currentLocale} onChange={this.setLocale.bind(this)} />
      </div>
    );
  }
}

function mapStateToProps(state: Object): {intl: IntlState} {
  return {
    intl: state.intl,
  };
}

function mapDispatchToProps(dispatch: Function): {Actions: Object} {
  return {Actions: bindActionCreators(ActionCreators, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(LocalesContainer);
