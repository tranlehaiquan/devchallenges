import { Stay } from '../../types';
import { ACTIONS } from './types';

export const setStays = (stays: Stay[]) => ({
  type: ACTIONS.SET_STAYS,
  payload: {
    stays,
  },
});
