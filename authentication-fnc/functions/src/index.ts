import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import get from "lodash/get";

import getUserAvatar from "./utils/getUserAvatar";
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
  let displayName = user.displayName;
  const photoURL = user.photoURL || getUserAvatar(user.email || "");

  if (!displayName) {
    displayName = user.providerData.reduce((currentName, { displayName }) => {
      if (!currentName && displayName) return displayName;
      return currentName;
    }, "");
  }

  await userRef.child(user.uid).set({
    photoURL,
    bio: "",
    displayName,
    phoneNumber: get(user, "phoneNumber", "") || "",
    email: get(user, "email", "") || "",
  });

  return null;
});
