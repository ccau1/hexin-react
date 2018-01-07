import React from "react";
import { css, withStyles } from "../../Themes";
import NavItem from "./NavItem";

const Nav = ({ history, styles }) => {
  return (
    <div {...css(styles.container)}>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about">About</NavItem>
    </div>
  );
};

export default withStyles(({ color, unit }) => ({
  container: {
    color: color.primary,
    marginBottom: 2 * unit
  },

  link: {
    color: color.primary
  },

  activeLink: {
    color: color.secondary,
    textDecoration: "none"
  },

  link_bold: {
    fontWeight: 700
  }
}))(Nav);
