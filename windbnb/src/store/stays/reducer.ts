import {
  SET_STAYS,
  SET_LOCATION,
  SET_GUESTS,
  StaysState,
  StaysActions,
} from './types';

const defaultState = {
  stays: [],
  guests: {
    children: 0,
    adults: 0,
  },
  location: '',
};

export default (state: StaysState = defaultState, action: StaysActions) => {
  switch (action.type) {
    case SET_STAYS: {
      return {
        ...state,
        stays: action.payload.stays,
      };
    }
    case SET_LOCATION: {
      return {
        ...state,
        location: action.payload.location,
      };
    }
    case SET_GUESTS: {
      return {
        ...state,
        guests: { ...state.guests, ...action.payload.guests },
      };
    }
    default:
      return state;
  }
};
