import * as firebaseAdmin from "firebase-admin";

firebaseAdmin.initializeApp();

const auth = firebaseAdmin.auth();
const database = firebaseAdmin.database();
const authenticationRef = database.ref("devchallenges/authentication");
const userRef = authenticationRef.child('users');

export { auth, database, userRef, authenticationRef };
export default firebaseAdmin;
