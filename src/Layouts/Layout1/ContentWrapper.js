/* @flow */

import React from "react";
import { css, withStyles } from "../../Themes";

const LayoutWrapper = ({ children, styles }) => {
  return <div {...css(styles.container)}>{children}</div>;
};
export default withStyles(({ color, unit }) => ({
  container: {
    flex: 1,
    flexDirection: "column",
    display: "flex"
  }
}))(LayoutWrapper);
