import { ACTIONS } from './types';

export const setSearchOpen = (isSearchOpen: boolean) => ({
  type: ACTIONS.SET_SEARCH_OPEN,
  payload: {
    isSearchOpen,
  },
});

export const openSearch = () => setSearchOpen(true);
export const closeSearch = () => setSearchOpen(false);
