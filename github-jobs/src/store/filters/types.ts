export const SET_FULL_TIME = 'SET_FULL_TIME';
export const SET_LOCATION = 'SET_LOCATION';
export const SET_DESCRIPTION = 'SET_DESCRIPTION';

export type FiltersState = {
  fullTime: boolean;
  description: string;
  location: string;
};

export const ACTIONS = {
  SET_FULL_TIME,
  SET_LOCATION,
  SET_DESCRIPTION,
};

interface SetFullTime {
  type: typeof SET_FULL_TIME;
  payload: {
    fullTime: boolean;
  };
}

interface SetLocation {
  type: typeof SET_LOCATION;
  payload: {
    location: string;
  };
}

interface SetDescription {
  type: typeof SET_DESCRIPTION;
  payload: {
    description: string;
  };
}

export type FiltersActions = SetFullTime | SetDescription | SetLocation;
