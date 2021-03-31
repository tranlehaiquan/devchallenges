import firebaseClient from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCyKs9bSG3fYssr-sFhb6kv-VsKT6UpGfE",
  authDomain: "devchallenge-quan.firebaseapp.com",
  projectId: "devchallenge-quan",
  storageBucket: "devchallenge-quan.appspot.com",
  messagingSenderId: "771491040679",
  appId: "1:771491040679:web:8075aab4a9263915b1ba82",
};

// if (firebaseClient.apps.length === 0) {
//   firebaseClient.initializeApp(firebaseConfig);
//   console.log('initializeApp');
// }

if (typeof window !== "undefined" && !firebaseClient.apps.length) {
  firebaseClient.initializeApp(firebaseConfig);
  firebaseClient
    .auth()
    .setPersistence(firebaseClient.auth.Auth.Persistence.SESSION);
  (window as any).firebase = firebaseClient;
}

export default firebaseClient;