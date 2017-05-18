/* @flow */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Countdown extends Component {
  static propTypes = {
    onComplete: PropTypes.func,
    seconds: PropTypes.number,
  };

  state: {
    countdownCounter: number,
    countdownInterval: number,
  };

  constructor(props: Object): void {
    super(props);
    this.state = {
      countdownCounter: props.seconds,
      countdownInterval: -1,
    };
  }

  componentDidMount(): void {
    this.startCounter();
  }

  componentWillUnmount(): void {
    this.stopCounter();
  }

  stopCounter(): void {
    clearInterval(this.state.countdownInterval);
  }

  startCounter(): void {
    // stop previous counter
    this.stopCounter();

    // start counter interval
    // TODO:: should use dateTime comparison instead
    const newCountdownInterval = setInterval(() => {
      let {countdownCounter} = this.state;
      if (countdownCounter <= 0) {
        this.stopCounter();
        if (this.props.onComplete) {
          this.props.onComplete();
        }
      } else {
        this.setState({
          countdownCounter: countdownCounter - 1,
        });
      }
    }, 1000);

    // save new counter interval id
    this.setState({
      countdownInterval: newCountdownInterval,
    });
  }

  render() {
    const {countdownCounter} = this.state;
    return (
      <span>{countdownCounter}</span>
    );
  }
}
