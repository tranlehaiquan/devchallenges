import axios from './axios';

export const getUserInfo = async () => {
  return axios.get('/getUserInfo');
};
export const updateUserInfo = () => {};
export const uploadImage = () => {};
