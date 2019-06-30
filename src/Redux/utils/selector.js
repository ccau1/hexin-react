import { createSelector } from "reselect";
import { hydrateAll, hydrate } from "../../Services/Schemas";
import R from "ramda";

export const _getResources = state => state.resources;
export const createHydrate = R.curry((fieldName, stateIdFn) =>
  createSelector([_getResources, stateIdFn], (resources, id) =>
    hydrate(fieldName, id, resources)
  )
);

export const createHydrateAll = R.curry(
  (fieldName, stateIdsFn, filter = n => n) =>
    createSelector([_getResources, stateIdsFn], (resources, ids) =>
      R.filter(filter, hydrateAll(fieldName, ids, resources))
    )
);
