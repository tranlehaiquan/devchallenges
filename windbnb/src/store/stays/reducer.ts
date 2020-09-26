import { SET_STAYS, StaysState, StaysActions } from './types';

const defaultState = {
  stays: [],
};

export default (state: StaysState = defaultState, actions: StaysActions) => {
  const { type, payload } = actions;

  switch (type) {
    case SET_STAYS: {
      return {
        ...state,
        stays: payload.stays,
      };
    }
    default:
      return state;
  }
};
