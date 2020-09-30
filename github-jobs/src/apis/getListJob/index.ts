import axios from '../axios';
import {
  ResponseListJob,
  ListJobQuery,
} from './types';

export * from './types';

export const getListJob = async (query: ListJobQuery = {}): Promise<ResponseListJob> => {
  const queryString = Object.keys(query).map((key) => `${key}=${query[key]}`).join('&');
  const response = await axios.get(`/positions.json?${queryString}`);
  return response.data as ResponseListJob;
};
