import React from "react";
import { Switch } from "react-router-dom";

import { getRoute } from "../Lib/route";
import Lazyload from "../Lib/Lazyload";
import RouteStrategy from "./RouteStrategy";

import Layout from "../Layouts/Layout1";
import LandingLayout from "../Layouts/LandingLayout";
import AuthLayout from "../Layouts/AuthLayout";

import PageNotFound from "../Pages/PageNotFound";
// import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import GridPage from "../Pages/GridPage";
import TypographyPage from "../Pages/TypographyPage";
import LandingPage from "../Pages/LandingPage";
import LocalisationPage from "../Pages/LocalisationPage";
import LoginPage from "../Pages/LoginPage";
import TodosPage from "../Pages/TodosPage";

const Loader = () => <div>Loading...</div>;
const PageLazyload = Lazyload(Loader);

const RouteLayout = getRoute(RouteStrategy, Layout);
const RouteLandingLayout = getRoute(RouteStrategy, LandingLayout);
const RouteAuthLayout = getRoute(RouteStrategy, AuthLayout);
const Route = getRoute(RouteStrategy);

export default () => (
  <Switch>
    <RouteLayout
      path="/"
      exact
      component={PageLazyload(() => import("../Pages/HomePage"))} // This will help lazy loading the page
      auth={["loggedIn"]}
    />
    <RouteLayout path="/about" component={AboutPage} />
    <RouteLayout path="/grid" component={GridPage} />
    <RouteLayout path="/todos" component={TodosPage} />
    <RouteLayout path="/typography" component={TypographyPage} />
    <RouteLayout path="/localisation" component={LocalisationPage} />
    <RouteLandingLayout path="/landing-page" component={LandingPage} />
    <RouteAuthLayout path="/login" component={LoginPage} />
    <Route component={PageNotFound} />
  </Switch>
);
