/* @flow */

import React from "react";
import { Switch } from "react-router-dom";

import { getRoute } from "../Lib/route";
import RouteStrategy from "./RouteStrategy";

import Layout from "../Layouts/Layout1";

import PageNotFound from "../Pages/PageNotFound";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";

const RouteLayout = getRoute(RouteStrategy, Layout);
const Route = getRoute(RouteStrategy);

export default () => {
  return (
    <div>
      <Switch>
        <RouteLayout path="/" exact component={HomePage} />
        <RouteLayout path="/about" component={AboutPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};
