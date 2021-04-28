import axios from './axios';
import { User } from '../types/User';
import { GenericResponseBody } from '../types/axios';
import firebaseClient from 'src/firebaseClient';

type UserRs = GenericResponseBody<{ user: User }>;

export const getUserInfo = async (): Promise<UserRs> => {
  return axios.get('/me');
};

export const updateUserInfo = (user: Partial<User>): Promise<UserRs> => {
  return axios.post('/me', user);
};

export const updateUserAvatar = (photoURL: string): Promise<UserRs> => {
  return axios.post('/me/photoURL', { photoURL });
};

export const uploadUserAvatar = async (
  image: File,
  userUUID: string
): Promise<string> => {
  const imageRef = firebaseClient
    .storage()
    .ref()
    .child(`avatars/${userUUID}.jpg`);
  await imageRef.put(image);
  return await imageRef.getDownloadURL();
};
