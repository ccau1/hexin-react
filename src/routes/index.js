import React from "react";
import { Switch } from "react-router-dom";

import { getRoute } from "../Lib/route";
import RouteStrategy from "./RouteStrategy";

import Layout from "../Layouts/Layout1";
import LandingLayout from "../Layouts/LandingLayout";

import PageNotFound from "../Pages/PageNotFound";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import GridPage from "../Pages/GridPage";
import TypographyPage from "../Pages/TypographyPage";
import LandingPage from "../Pages/LandingPage";
import LocalisationPage from "../Pages/LocalisationPage";

const RouteLayout = getRoute(RouteStrategy, Layout);
const RouteLandingLayout = getRoute(RouteStrategy, LandingLayout);
const Route = getRoute(RouteStrategy);

export default () => (
  <Switch>
    <RouteLayout path="/" exact component={HomePage} />
    <RouteLayout path="/about" component={AboutPage} />
    <RouteLayout path="/grid" component={GridPage} />
    <RouteLayout path="/typography" component={TypographyPage} />
    <RouteLayout path="/localisation" component={LocalisationPage} />
    <RouteLandingLayout path="/landing-page" component={LandingPage} />
    <Route component={PageNotFound} />
  </Switch>
);
