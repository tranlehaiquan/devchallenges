import { SET_JOBS, ADD_JOBS, JobActions, JobsState } from './types';

const defaultState: JobsState = {
  jobs: {},
};

export default (state: JobsState = defaultState, action: JobActions) => {
  switch (action.type) {
    case SET_JOBS: {
      return {
        ...state,
        jobs: action.payload.jobs,
      };
    }
    case ADD_JOBS: {
      return {
        ...state,
        jobs: { ...state.jobs, ...action.payload.jobs },
      };
    }
    default:
      return state;
  }
};
