import { firebaseAdmin } from './firebaseAdmin';

let isAuth: boolean = false;
console.log('code');

export const getAuth = async (token: string) => {
  return await firebaseAdmin.auth().verifyIdToken(token);
};

export const setLogin = async () => {
  return true;
};

export const loginWithToken = async () => {}

export const setLogout = () => (isAuth = false);
