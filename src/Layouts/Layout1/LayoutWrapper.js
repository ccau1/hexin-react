/* @flow */

import React from "react";
import { css, withStyles } from "../../Themes";

const LayoutWrapper = ({ children, styles }) => {
  return <div {...css(styles.container)}>{children}</div>;
};
export default withStyles(({ color, unit }) => ({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  }
}))(LayoutWrapper);
