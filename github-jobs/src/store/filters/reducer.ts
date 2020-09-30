import {
  SET_LOCATION,
  FiltersActions,
  FiltersState,
  SET_DESCRIPTION,
  SET_FULL_TIME,
} from './types';

const defaultState: FiltersState = {
  description: '',
  location: '',
  fullTime: false,
};

export default (state: FiltersState = defaultState, action: FiltersActions) => {
  switch (action.type) {
    case SET_LOCATION: {
      return {
        ...state,
        location: action.payload.location,
      };
    }
    case SET_DESCRIPTION: {
      return {
        ...state,
        description: action.payload.description,
      };
    }
    case SET_FULL_TIME: {
      return {
        ...state,
        fullTime: action.payload.fullTime,
      };
    }
    default:
      return state;
  }
};
