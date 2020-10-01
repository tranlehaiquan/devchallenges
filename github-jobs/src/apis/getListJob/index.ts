import axios from '../axios';
import {
  ResponseListJob,
  ListJobQuery,
  ResponseJob,
} from './types';

export * from './types';

export const getListJob = async (query: ListJobQuery = {}): Promise<ResponseListJob> => {
  const queryString = Object.keys(query).map((key) => `${key}=${query[key]}`).join('&');
  const response = await axios.get(`/positions.json?${queryString}`);
  return response.data as ResponseListJob;
};

export const getJobById = async (id: string): Promise<ResponseJob> => {
  const response = await axios.get(`/positions/${id}.json?`);
  return response.data as ResponseJob;
};