const unit = 1;

const theme = {
  color: {
    primary: "rgb(45, 52, 70)",
    primaryHighlight: "rgb(87, 101, 142)",
    primaryDisabled: "rgb(214, 217, 226)",
    primaryText: "#f3f3f3",
    primaryHighlightText: "#fff",
    secondary: "rgb(0,166,153)",
    secondaryHighlight: "rgb(86, 214, 204)",
    secondaryText: "#f3f3f3",
    secondaryHighlightText: "#fff",
    background: "#fdfdfd",
    contentBackground: "#fff"
  },
  unit,
  fonts: {
    fontFamily: "Roboto, sans-serif",
    size: {
      h1: "24pt",
      h2: "21pt",
      h3: "19pt",
      h4: "17pt",
      h5: "15pt",
      h6: "13pt",
      p: "12pt",
      small: "9pt"
    },
    margin: {
      h1: "50px 0 50px 0",
      h2: "40px 0 30px 0",
      h3: "30px 0 20px 0",
      h4: "10px 0 8px 0",
      h5: "8px 0 8px 0",
      h6: "7px 0 8px 0",
      p: "5px 0 2px",
      small: "2px 0"
    },
    color: {
      h1: "#1a1a1a",
      h2: "#1a1a1a",
      h3: "#1a1a1a",
      h4: "#1a1a1a",
      h5: "#1a1a1a",
      h6: "#1a1a1a",
      p: "#545454",
      small: "#545454"
    }
  },
  measurements: {
    padding: 20 * unit,
    loading: {
      width: 100 * unit,
      height: 100 * unit
    }
  }
};

theme.flexa = {
  columns: 12,
  gutter: {
    xs: 2,
    sm: 2,
    md: 4,
    lg: 4
  },
  breakpoints: {
    xs: 0,
    sm: 50,
    md: 60,
    lg: 70
  }
};

export default theme;
