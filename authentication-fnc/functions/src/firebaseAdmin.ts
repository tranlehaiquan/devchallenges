import * as firebaseAdmin from "firebase-admin";

firebaseAdmin.initializeApp();

const auth = firebaseAdmin.auth();

export { auth };
export default firebaseAdmin;
