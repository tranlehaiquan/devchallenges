import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useCallback,
} from 'react';
import nookies from 'nookies';

import { setHeaderAuth, clearHeaderAuth } from '../apis/axios';
import getUserAvatar from '../utils/getUserAvatar';
import firebaseClient from '../firebaseClient';

const AuthContext = createContext<{
  user: firebaseClient.User | null;
  mounted: boolean;
  signOut: () => Promise<void>;
}>({
  user: null,
  mounted: false,
  signOut: async () => {},
});

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<firebaseClient.User | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);

  const signOutCache = useCallback(async () => {
    await firebaseClient.auth().signOut();
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

      if (!user.displayName || !user.photoURL) {
        const displayName =
          user.providerData.reduce((currentName, { displayName }) => {
            if (!currentName && displayName) return displayName;
            return currentName;
          }, '') || user.email;
        user.updateProfile({
          photoURL: getUserAvatar(user.email),
          displayName,
        });
      }

      // auto link account social
      // const providersName = keys(providers);
      // if (user.providerData.length < providersName.length) {
      //   const providerDataToObject = user.providerData.reduce((acc, provider) => {
      //     acc[provider.providerId] = provider;

      //     return acc;
      //   }, {});

      //   providersName.forEach((providerName) => {
      //     if(!providerDataToObject[providerName]) {
      //       user.linkWithPopup(providers[providerName]);
      //     }
      //   });
      // }

      console.log(`updating token...`);
      const token = await user.getIdToken();
      setHeaderAuth(token); // set token before user and mounted to make sure fnc call after token set
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
    <AuthContext.Provider value={{ user, mounted, signOut: signOutCache }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
