import * as functions from "firebase-functions";

export const getTokenFromReq = (req: functions.https.Request): string => {
  const { headers, cookies } = req;
  console.log(headers);
  if (headers.authorization && headers.authorization.startsWith("Bearer ")) {
    console.log('Found "Authorization" header');
    // Read the ID Token from the Authorization header.
    return headers.authorization.split("Bearer ")[1];
  }

  if (cookies && cookies.__session) {
    console.log('Found "__session" cookie');
    // Read the ID Token from cookie.
    return cookies.__session;
  }

  return "";
};

export default getTokenFromReq;