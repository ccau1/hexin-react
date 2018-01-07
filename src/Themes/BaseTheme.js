const theme = {
  color: {
    primary: "#FF5A5F",
    secondary: "#00A699",
    primaryText: "#f3f3f3",
    primaryHighlightText: "#fff",
    secondaryText: "#f3f3f3"
  },
  unit: 1
};
theme.screenPadding = 20 * theme.unit;

theme.presets = {
  mainContainer: {
    padding: theme.screenPadding * theme.unit
  },
  navBar: {
    height: theme.screenPadding * theme.unit,
    backgroundColor: "#fff",
    padding: theme.screenPadding * theme.unit,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    borderBottomWidth: 1 * theme.unit,
    borderBottomStyle: "solid",
    alignContent: "center"
  }
};

export default theme;
