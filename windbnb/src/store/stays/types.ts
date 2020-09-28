import { Stay, Guests } from '../../types';
export const SET_STAYS = 'SET_STAYS';
export const SET_LOCATION = 'SET_LOCATION';
export const SET_GUESTS = 'SET_GUESTS';

export type StaysState = {
  stays: Stay[];
  guests: Guests;
  location: string;
};

export const ACTIONS = {
  SET_STAYS,
  SET_LOCATION,
  SET_GUESTS,
};

interface SetStays {
  type: typeof SET_STAYS;
  payload: {
    stays: Stay[];
  };
}

interface SetLocation {
  type: typeof SET_LOCATION;
  payload: {
    location: string;
  };
}

interface SetGuests {
  type: typeof SET_GUESTS;
  payload: {
    guests: {
      adults?: number;
      children?: number;
    };
  };
}

export type StaysActions = SetStays | SetLocation | SetGuests;
