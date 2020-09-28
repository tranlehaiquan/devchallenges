import { Stay, Guests } from '../../types';
import { ACTIONS } from './types';

export const setStays = (stays: Stay[]) => ({
  type: ACTIONS.SET_STAYS,
  payload: {
    stays,
  },
});

export const setLocation = (location: string) => ({
  type: ACTIONS.SET_LOCATION,
  payload: {
    location,
  },
});

export const setGuests = (guests: Guests) => ({
  type: ACTIONS.SET_GUESTS,
  payload: {
    guests,
  },
});
