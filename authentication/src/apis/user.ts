import axios from './axios';

export const getUserInfo = async () => {
  return axios.get('/me');
};

export const updateUserInfo = () => {};

export const uploadImage = () => {};
