/* @flow */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
import {
  H1,
  P,
} from 'app/components';
import messages from './messages';
// import Countdown from 'components/Countdown';
import Countdown from 'lib/countdown';
import {withRouter} from 'react-router-dom';

class LoginFormSuccess extends Component {
  static propTypes = {
    redirect: PropTypes.string,
    counter: PropTypes.number,
  };

  state: {
    counterStart: number,
    counter: number,
  };
  _countdown: Object;

  constructor(props: Object): void {
    super(props);
    this.state = {
      counterStart: props.counter || 5,
      counter: props.counter || 5,
    };
  }

  componentDidMount(): void {
    this._countdown = new Countdown(this.state.counterStart).startCountdown(counter => {
      this.setState({counter});
    }, () => {
      this.redirect();
    });
  }

  componentWillUnmount(): void {
    this._countdown.stopCountdown();
  }

  redirect() {
    const {history} = this.props;
    history.push(this.props.redirect);
  }

  render() {
    const {counter} = this.state;
    return (
      <div>
        <H1><FormattedMessage {...messages.alreadyLoggedIn} /></H1>
        <P><FormattedMessage {...messages.redirect} values={{seconds: '' + counter}} /></P>
      </div>
    );
  }
}

export default withRouter(LoginFormSuccess);
