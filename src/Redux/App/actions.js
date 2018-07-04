import { createActions } from 'reduxsauce';

export const { Types: AppTypes, Creators: AppActions } = createActions(
  {
    /* ------------- Reducers ------------- */
    toggleSidebarOpen: ['isOpen'],
    toggleHeaderMenuOpen: ['isOpen'],
    reset: null
  },
  { prefix: 'App/' }
);
