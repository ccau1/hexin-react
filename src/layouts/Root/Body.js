/* @flow */
import React, {Component} from 'react';

export default class Body extends Component {
  render() {
    return (
      <div style={styles.container}>
        {this.props.children}
      </div>
    );
  }
}

const styles = {
  container: {
    marginTop: '128px',
  },
};
