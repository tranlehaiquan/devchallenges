import { SET_SEARCH_OPEN, LayoutState, LayoutActions } from './types';

const defaultState = {
  isSearchOpen: false,
};

export default (state: LayoutState = defaultState, action: LayoutActions) => {
  switch (action.type) {
    case SET_SEARCH_OPEN: {
      return {
        ...state,
        isSearchOpen: action.payload.isSearchOpen,
      };
    }
    default:
      return state;
  }
};
