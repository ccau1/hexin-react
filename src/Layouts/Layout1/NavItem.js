/* @flow */

import React from "react";
import { css, withStyles } from "../../Themes";
import { NavLink } from "react-router-dom";
const NavItem = ({ styles, to, children }) => {
  const activeLink = css(styles.activeLink);
  return (
    <NavLink
      to={to}
      {...css(styles.link)}
      activeClassName={activeLink.className}
    >
      {children}
    </NavLink>
  );
};
export default withStyles(({ color, unit, screenPadding }) => ({
  link: {
    ":before": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "transparent"
    },
    ":hover:before": {
      backgroundColor: "rgb(0, 0, 0, 0.3)"
    },
    color: color.primaryText,
    display: "block",
    padding: screenPadding * unit
  },
  activeLink: {
    color: color.primaryHighlightText,
    textDecoration: "none"
  }
}))(NavItem);
