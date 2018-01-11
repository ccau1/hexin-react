import React from "react";
import { IntlProvider, addLocaleData } from "react-intl";
import intl_en from "react-intl/locale-data/en";
import intl_zh from "react-intl/locale-data/zh";

// Our translated strings
import en from "./../Locales/default.json";
import zh from "./../Locales/zh.json";

addLocaleData([...intl_en, ...intl_zh]);

export default ({ children }) => {
  return (
    <IntlProvider locale={"en"} messages={en}>
      {children}
    </IntlProvider>
  );
};
