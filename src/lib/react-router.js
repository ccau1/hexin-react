import React from 'react';
import {
  Route,
  withRouter,
} from 'react-router-dom';
import {Redirect} from 'react-router';

// Strategy that manages the behaviour of the route, such as its authenticate process
export const RouteStrategy: RouteStrategy = class RouteStrategy {
  unAuthRedirect = '/login';

  authenticate(roles: Array<string>): boolean {
    return true;
  }
};

// Factory that generates a Route with specified strategy and layout
export const getRoute = (RouteStrategy_: RouteStrategy = RouteStrategy, layout: any = null): Function => {
  const returnRoute = (Component, props, Layout) => {
    return Layout ? <Layout><Component {...props} /></Layout> : <Component {...props} />;
  };

  const routeStrategy = new RouteStrategy_();

  return ({auth, render, component: Component, ...rest}: Object) => {
    return (
      <Route {...rest} render={renderProps => {
        if (auth) {
          if (routeStrategy.authenticate(auth)) {
            return returnRoute(Component || render, renderProps, layout);
          } else {
            const RedirectComponent = withRouter(({location}) => (
              <Redirect to={{
                pathname: `${routeStrategy.unAuthRedirect}`,
                search: `?redirect=${location.pathname}`,
                state: {requiredRoles: auth},
              }} />
            ));
            return <RedirectComponent />;
          }
        } else {
          return returnRoute(Component || render, renderProps, layout);
        }
      }} />
    );
  };
};
