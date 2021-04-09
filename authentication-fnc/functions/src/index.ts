import * as functions from "firebase-functions";
import * as express from "express";
import * as cors from "cors";
import "./firebaseAdmin";
import routers from "./routers";

const app = express();

app.use(cors({ origin: true }));
app.use("/", routers);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.api = functions.https.onRequest(app);

exports.onCreateUser = functions.auth.user().onCreate((user) => {
  functions.logger.log(user);
});
