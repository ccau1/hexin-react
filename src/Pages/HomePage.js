/* @flow */

import React, { Component } from "react";
import { css, withStyles } from "../Themes";

class HomePage extends Component {
  static propTypes = {};

  render() {
    const { styles } = this.props;
    return <div {...css(styles.mainContainer)}>Home page</div>;
  }
}
export default withStyles(({ color, unit, presets }) => ({
  mainContainer: presets.mainContainer
}))(HomePage);
