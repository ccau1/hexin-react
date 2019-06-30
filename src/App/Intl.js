import React from "react";
import { IntlProvider, addLocaleData } from "react-intl";
import { connect } from "react-redux";
import en from "react-intl/locale-data/en";
import zh from "react-intl/locale-data/zh";

addLocaleData([...en, ...zh]);

const Intl = ({ intl, children }) => {
  return (
    <IntlProvider key={intl.locale} {...intl}>
      {children}
    </IntlProvider>
  );
};

export default connect(state => {
  return {
    intl: state.intl
  };
})(Intl);
