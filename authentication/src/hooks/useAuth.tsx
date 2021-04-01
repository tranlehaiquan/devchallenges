import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useCallback,
} from 'react';
import nookies from 'nookies';
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
      // this function alwasy be called ethier token exist or not
      console.log(`token changed!`);
      if (!user) {
        console.log(`no token found...`);
        setUser(null);
        nookies.destroy(null, 'token');
        nookies.set(null, 'token', '', { path: '/' });
        setMounted(true);
        return;
      }

      console.log(`updating token...`);
      const token = await user.getIdToken();
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
