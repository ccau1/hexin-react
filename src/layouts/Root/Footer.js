/* @flow */
import React from 'react';

export default class Footer extends React.Component {
  constructor(props: Object): void {
    super(props);
  }

  render() {
    return (
      <div style={styles.container}>
        footer
      </div>
    );
  }
}

const styles = {
  container: {
    borderTop: '1px solid #e6e6e6',
    minHeight: '70px',
    padding: '10px 35px',
  },
};
