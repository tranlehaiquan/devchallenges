import * as firebaseAdmin from "firebase-admin";

firebaseAdmin.initializeApp();

const auth = firebaseAdmin.auth();
const database = firebaseAdmin.database();
const authenticationRef = database.ref("devchallenges/authentication");
const userRef = authenticationRef.child("users");
const storage = firebaseAdmin.storage();

export { auth, database, userRef, authenticationRef, storage };
export default firebaseAdmin;
