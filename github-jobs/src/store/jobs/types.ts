import { Job } from '../../types/job';

export const SET_JOBS = 'SET_JOBS';
export const ADD_JOBS = 'ADD_JOB';

export const ACTIONS = {
  SET_JOBS,
  ADD_JOBS,
};

export type JobMap = {
  [key: string]: Job;
};

export type JobsState = {
  jobs: JobMap;
};

interface SetJobs {
  type: typeof SET_JOBS;
  payload: {
    jobs: JobMap;
  };
}

interface AddJobs {
  type: typeof ADD_JOBS;
  payload: {
    jobs: JobMap;
  };
}

export type JobActions = SetJobs | AddJobs;
