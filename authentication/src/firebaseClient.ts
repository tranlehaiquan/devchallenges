import firebaseClient from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/performance';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESS_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  useEmulator: process.env.USE_EMULATOR,
};

if (typeof window !== 'undefined' && !firebaseClient.apps.length) {
  firebaseClient.initializeApp(firebaseConfig);
  firebaseClient
    .auth()
    .setPersistence(firebaseClient.auth.Auth.Persistence.LOCAL)
    .then(() => {
      console.log('done');
    });
  if (firebaseConfig.useEmulator) {
    firebaseClient.auth().useEmulator(firebaseConfig.useEmulator);
  }
  (window as any).firebase = firebaseClient;

  firebaseClient.performance();
}

let providerGithub = new firebaseClient.auth.GithubAuthProvider();
let providerEmail = new firebaseClient.auth.EmailAuthProvider();

export const providers = {
  password: providerEmail,
  github: providerGithub,
};

providerGithub.addScope('user:email');

export { providerGithub };
export default firebaseClient;
