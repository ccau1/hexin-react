import React from "react";
import { css, withStyles } from "../../Themes";

const Content = ({ children, styles }) => {
  return <div {...css(styles.container)}>{children}</div>;
};
export default withStyles(({ color, unit }) => ({
  container: {
    flex: 1
  }
}))(Content);
