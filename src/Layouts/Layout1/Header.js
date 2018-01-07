/* @flow */

import React, { Component } from "react";
import { withStyles, css } from "../../Themes";
import FaBars from "react-icons/lib/fa/bars";

class Header extends Component {
  static propTypes = {};

  render() {
    const { styles } = this.props;
    return (
      <div {...css(styles.container)}>
        <div {...css(styles.leftSide)}>
          <FaBars />
        </div>
        <div {...css(styles.rightSide)} />
      </div>
    );
  }
}

export default withStyles(({ color, unit, presets }) => ({
  container: {
    ...presets.navBar,
    justifyContent: "space-between"
  },
  leftSide: {},
  rightSide: {}
}))(Header);
