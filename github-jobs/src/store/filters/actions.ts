import { ACTIONS } from './types';

export const setLocation = (location: string) => ({
  type: ACTIONS.SET_LOCATION,
  payload: {
    location,
  },
});

export const setFullTime = (fullTime: boolean) => ({
  type: ACTIONS.SET_FULL_TIME,
  payload: {
    fullTime,
  },
});

export const setDescription = (description: string) => ({
  type: ACTIONS.SET_DESCRIPTION,
  payload: {
    description,
  },
});
