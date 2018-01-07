/* @flow */

import React from "react";
import Nav from "./Nav";
import { withStyles, css } from "../../Themes";
const SideBar = ({ styles }) => {
  return (
    <div {...css(styles.container)}>
      <div {...css(styles.navBar)}>SideBar</div>
      <Nav />
    </div>
  );
};

export default withStyles(({ color, unit, presets }) => ({
  container: {
    width: 250 * unit,
    backgroundColor: color.primary
  },
  navBar: {
    ...presets.navBar,
    backgroundColor: "rgba(0, 0, 0, 0.3)"
  }
}))(SideBar);
