import * as functions from "firebase-functions";
import * as firebaseAdmin from 'firebase-admin';

// The Firebase Admin SDK to access Firestore.
firebaseAdmin.initializeApp();
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});
