/* @flow */

import React from 'react';
// import {Route} from 'react-router-dom';

import {getRoute} from 'lib/react-router';
import {Switch} from 'react-router-dom';
import RouteStrategy from 'routes/RouteStrategy';

import Layout from 'layouts/Root';

import Todos from 'routes/Root/Todos';
import Contact from 'routes/Root/Contact';
import Home from 'routes/Root/Home';
import Login from 'routes/Root/Login';
import SignUp from 'routes/Root/SignUp';
import Profile from 'routes/Root/Profile';
import SecretStuff from 'routes/Root/SecretStuff';
import {PageNotFound} from 'app/components';

export default ({match, history}: Object) => {
  const RouteLayout = getRoute(RouteStrategy, Layout);
  const Route = getRoute(RouteStrategy);

  return (
    <div>
      <Switch>
        <RouteLayout path="/" exact component={Home} />
        <RouteLayout path="/login" component={Login} />
        <RouteLayout path="/signup" component={SignUp} />
        <RouteLayout path="/profile" component={Profile} />
        <RouteLayout path="/contact" component={Contact} />
        <RouteLayout path="/todos" component={Todos} />
        <RouteLayout path="/secret-stuff" component={SecretStuff} auth={['loggedIn']} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};
