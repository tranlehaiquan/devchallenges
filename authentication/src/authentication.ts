let isAuth: boolean = false;
console.log('code');

export const getAuth = () => {
  console.log('get auth');
  return isAuth;
};
export const setLogin = () => (isAuth = true);
export const setLogout = () => (isAuth = false);
