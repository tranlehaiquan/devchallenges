import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import get from "lodash/get";

import { userRef } from "./firebaseAdmin";
import routers from "./routers";

const app = express();

app.use(cors({ origin: true }));
app.use("/", routers);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.api = functions.https.onRequest(app);

exports.onCreateUser = functions.auth.user().onCreate(async (user) => {
  console.log({
    bio: "",
    name: get(user, "displayName", ""),
    phoneNumber: get(user, "phoneNumber", ""),
    email: get(user, "email", ""),
  });
  await userRef.child(user.uid).set({
    bio: "",
    name: get(user, "displayName", "") || "",
    phoneNumber: get(user, "phoneNumber", "") || "",
    email: get(user, "email", "") || "",
  });

  return null;
});
