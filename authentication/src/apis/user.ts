import axios from './axios';
import { User } from '../types/User';
import { GenericResponseBody } from '../types/axios';

type UserRs = GenericResponseBody<{ user: User }>;

export const getUserInfo = async (): Promise<UserRs> => {
  return axios.get('/me');
};

export const updateUserInfo = (user: Partial<User>): Promise<UserRs> => {
  return axios.post('/me', user);
};

export const uploadImage = () => {};
