/* @flow */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import {ActionCreators} from 'actions';
import Header from './Header';

// Menus
import AnonMenu from 'layouts/Root/Menus/AnonMenu';
import LoggedInMenu from 'layouts/Root/Menus/LoggedInMenu';

class HeaderContainer extends React.Component {
  constructor(props: Object): void {
    super(props);
  }

  getMenu() {
    const {user, match, history, location} = this.props;

    if (!user || !user._id) {
      // anonymous user
      return <AnonMenu match={match} history={history} location={location} />;
    } else {
      // logged in user
      return <LoggedInMenu user={user} match={match} history={history} location={location} />;
    }
  }

  render() {
    const {user} = this.props;
    const {getMenu} = this;

    return (
      <Header user={user} menu={getMenu.bind(this)()} />
    );
  }
}

function mapStateToProps(state: Object): {user: Object} {
  return {
    user: state.account.user,
  };
}

function mapDispatchToProps(dispatch: Function): {Actions: Object} {
  return {Actions: bindActionCreators(ActionCreators, dispatch)};
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderContainer));
