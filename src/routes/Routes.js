/* @flow */

import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import RootRoutes from 'routes/Root';
import {PageNotFound} from 'app/components';

export default () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={RootRoutes} />
        {/*<Route path="/admin" component={AdminPage} />*/}
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};
