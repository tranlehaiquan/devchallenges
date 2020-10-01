import { ACTIONS, JobMap } from './types';
import { Job } from '../../types/job';

const turnJobsToMap = (jobs: Job[]): JobMap => {
  const jobMap: JobMap = jobs.reduce<JobMap>((acc, curr) => {
    acc[curr.id] = curr;
    return acc;
  }, {});

  return jobMap;
};

export const setJobs = (jobs: Job[]) => {
  const jobMap = turnJobsToMap(jobs);
  return {
    type: ACTIONS.SET_JOBS,
    payload: {
      jobs: jobMap,
    },
  };
};

export const addJobs = (jobs: Job[]) => {
  const jobMap = turnJobsToMap(jobs);

  return {
    type: ACTIONS.ADD_JOBS,
    payload: {
      jobs: jobMap,
    },
  };
};
