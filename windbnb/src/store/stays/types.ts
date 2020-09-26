import { Stay } from '../../types';
export const SET_STAYS = 'SET_STAYS';

export type StaysState = {
  stays: Stay[];
};

export const ACTIONS = {
  SET_STAYS,
};

interface SetStays {
  type: typeof SET_STAYS;
  payload: {
    stays: Stay[];
  };
}

export type StaysActions = SetStays;
