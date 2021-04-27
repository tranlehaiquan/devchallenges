import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useCallback,
} from 'react';
import nookies from 'nookies';

import { User } from '../types/User';
import { setHeaderAuth, clearHeaderAuth } from '../apis/axios';
import { getUserInfo, updateUserInfo } from '../apis/user';
import firebaseClient from '../firebaseClient';

const AuthContext = createContext<{
  user: firebaseClient.User | null;
  mounted: boolean;
  signOut: () => Promise<void>;
  updateUserInfo: (userInfo:  Omit<User, 'photoURL'>) => Promise<void>;
  userInfo: User | undefined;
}>({
  user: null,
  mounted: false,
  signOut: async () => {},
  userInfo: null,
  updateUserInfo: async () => {},
});

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<firebaseClient.User | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<User>();

  const signOutCache = useCallback(async () => {
    await firebaseClient.auth().signOut();
  }, []);

  const handleGetUserInfo = useCallback(async () => {
    console.log('handleGetUserInfo');
    const userInfoRs = await getUserInfo();
    setUserInfo(userInfoRs.data.user);
  }, []);

  const handleUpdateUserInfo = useCallback(async (userInfo: Partial<User>) => {
    const newUserInfo = await updateUserInfo(userInfo);
    setUserInfo(newUserInfo.data.user);
  }, []);

  useEffect(() => {
    console.log('AuthProvider use effect 1');
    if (typeof window !== 'undefined') {
      (window as any).nookies = nookies;
    }

    return firebaseClient.auth().onIdTokenChanged(async (user) => {
      // this function always be called either token exist or not
      console.log(`token changed!`);
      if (!user) {
        console.log(`no token found...`);
        clearHeaderAuth();
        setUser(null);
        nookies.destroy(null, 'token');
        nookies.set(null, 'token', '', { path: '/' });
        setMounted(true);
        return;
      }

      console.log(`updating token...`);
      const token = await user.getIdToken();
      setHeaderAuth(token); // set token before user and mounted to make sure fnc call after token set
      handleGetUserInfo();
      setUser(user);
      setMounted(true);
      nookies.destroy(null, 'token');
      nookies.set(null, 'token', token, { path: '/' });
    });
  }, []);

  // force refresh the token every 10 minutes
  useEffect(() => {
    console.log('AuthProvider use effect 2');
    const handle = setInterval(async () => {
      console.log(`refreshing token...`);
      const user = firebaseClient.auth().currentUser;
      if (user) await user.getIdToken(true);
    }, 10 * 60 * 1000);
    return () => clearInterval(handle);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        mounted,
        signOut: signOutCache,
        userInfo,
        updateUserInfo: handleUpdateUserInfo,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
