import { GenericResponseBody } from '../types';
import { Job } from '../../types/job';

type JobItem = Job;
type ListJob = JobItem[];

export type ListJobQuery = {
  description?: string;
  location?: string;
  full_time?: boolean;
  page?: number;
}

export type ResponseListJob = ListJob;
export type ResponseJob = Job;