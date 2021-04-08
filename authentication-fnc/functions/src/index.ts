import * as functions from "firebase-functions";
import * as firebaseAdmin from "firebase-admin";
// import * as express from 'express';
import * as cors from "cors";

// const app = express();

// Automatically allow cross-origin requests
// app.use(cors({ origin: true }));

// Add middleware to authenticate requests
// app.use(myMiddleware);

// The Firebase Admin SDK to access Firestore.
firebaseAdmin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", { structuredData: true });
//   response.send("Hello from Firebase!");
// });

// // Take the text parameter passed to this HTTP endpoint and insert it into
// // Firestore under the path /messages/:documentId/original
// export const addMessage = functions.https.onRequest(async (req, res) => {
//   // Grab the text parameter.
//   const original = req.query.text || 'default';
//   // Push the new message into Firestore using the Firebase Admin SDK.
//   // Send back a message that we've successfully written the message
//   res.json({ result: `Message with ID: ${original} added. 1235` });
// });

// export const api = functions.https.onRequest(app);

import parseToken from "./utils/parseToken";

const firebaseVerifyUserToken = async (token: string) => {
  return await firebaseAdmin.auth().verifyIdToken(token);
};

const corsMd = cors({ origin: true });

export const user = functions.https.onRequest(async (req, res) => {
  corsMd(req, res, async () => {
    const method = req.method.toLocaleLowerCase();
    if (method === "get") getUserInfo(req, res);
    if (method === "post") updateUserInfo(req, res);
  });
});

const getUserInfo = async (req: functions.https.Request, res: functions.Response) => {
  res.send('getUserInfo');
}

const updateUserInfo = async (req: functions.https.Request, res: functions.Response) => {
  res.send('updateUserInfo');
}
