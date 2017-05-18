import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
import {withRouter} from 'react-router-dom';
import {
  H1, P,
} from 'app/components';
import messages from './messages';
import Countdown from 'lib/countdown';

class SignUpSuccess extends Component {
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
        <H1><FormattedMessage {...messages.signUpSuccess} /></H1>
        <P><FormattedMessage {...messages.redirect} values={{seconds: '' + counter}} /></P>
      </div>
    );
  }
}

export default withRouter(SignUpSuccess);
