import * as _reducer from "./reducer";

export const setArray = field => (Array.isArray(field) ? field : [field]);

export const getFieldVal = (state, field) => {
  if (Array.isArray(field)) {
    return field.reduce((a, b) => {
      return a[b];
    }, state);
  } else {
    return state[field];
  }
};

export const getNavRouteByName = (routes, routeName) => {
  return routes
    ? routes.find(r => r.routeName === routeName) ||
        routes
          .map(r => getNavRouteByName(r.routes, routeName))
          .filter(r => r !== null && r !== undefined)[0]
    : null;
};

export const reducer = _reducer;
