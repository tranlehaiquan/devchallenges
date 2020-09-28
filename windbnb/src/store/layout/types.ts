export const SET_SEARCH_OPEN = 'SET_SEARCH_OPEN';

export type LayoutState = {
  isSearchOpen: boolean;
};

export const ACTIONS = { SET_SEARCH_OPEN };

interface SetSearchOpen {
  type: typeof SET_SEARCH_OPEN;
  payload: {
    isSearchOpen: boolean;
  };
}

export type LayoutActions = SetSearchOpen;
