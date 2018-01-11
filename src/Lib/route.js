import React, { Children } from "react";
import PropTypes from "prop-types";
import { Route, withRouter } from "react-router-dom";
import OriginalNavLink from "react-router-dom/NavLink";
import { Redirect } from "react-router";

// Strategy that manages the behaviour of the route, such as its authenticate process
export const RouteStrategy = class RouteStrategy {
  unAuthRedirect = "/login";

  authenticate(roles: Array<string>): boolean {
    return true;
  }
};

export const withRouteStrategy = ComponentToWrap => {
  return class RouteStrategyComponent extends React.Component {
    // let’s define what’s needed from the `context`
    static contextTypes = {
      routeStrategy: PropTypes.object.isRequired
    };
    render() {
      const { routeStrategy } = this.context;
      // what we do is basically rendering `ComponentToWrap`
      // with an added `routeStrategy` prop, like a hook
      return <ComponentToWrap {...this.props} routeStrategy={routeStrategy} />;
    }
  };
};

export const NavLink = withRouteStrategy(({ routeStrategy, auth, ...rest }) => {
  return routeStrategy.authenticate(auth) ? (
    <OriginalNavLink {...rest} />
  ) : null;
});

class LayoutProvider extends React.Component {
  static childContextTypes = {
    routeStrategy: PropTypes.object.isRequired
  };
  getChildContext() {
    return { routeStrategy: this.props.routeStrategy };
  }
  render() {
    // `Children.only` enables us not to add a <div /> for nothing
    return Children.only(this.props.children);
  }
}

// Factory that generates a Route with specified strategy and layout
export const getRoute = (
  RouteStrategy_ = RouteStrategy,
  layout: any = null
): Function => {
  const routeStrategy = new RouteStrategy_();
  const returnRoute = (Component, props, Layout) => {
    return (
      <LayoutProvider routeStrategy={routeStrategy}>
        {Layout ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Component {...props} />
        )}
      </LayoutProvider>
    );
  };

  return ({ auth, render, component: Component, ...rest }: Object) => {
    return (
      <Route
        {...rest}
        render={renderProps => {
          if (auth) {
            if (routeStrategy.authenticate(auth)) {
              return returnRoute(Component || render, renderProps, layout);
            } else {
              const RedirectComponent = withRouter(({ location }) => (
                <Redirect
                  to={{
                    pathname: `${routeStrategy.unAuthRedirect}`,
                    search: `?redirect=${location.pathname}`,
                    state: { requiredRoles: auth }
                  }}
                />
              ));
              return <RedirectComponent />;
            }
          } else {
            return returnRoute(Component || render, renderProps, layout);
          }
        }}
      />
    );
  };
};
