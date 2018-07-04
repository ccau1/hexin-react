import { createActions } from 'reduxsauce';

export const { Types: LoadingTypes, Creators: LoadingActions } = createActions(
  {},
  { prefix: 'Loading/' }
);
