import { Request, Response, NextFunction } from 'express';
import { logger } from 'firebase-functions'
import firebaseAdmin from "../firebaseAdmin";

const parseTokenFromReq = (req: Request): string => {
  let idToken = '';
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    logger.log('Found "Authorization" header');
    idToken = req.headers.authorization.split('Bearer ')[1];
  } else if(req.cookies) {
    logger.log('Found "__session" cookie');
    idToken = req.cookies.__session;
  }

  return idToken;
}

export const firebaseAuthentication = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const token = parseTokenFromReq(req);

  if(!token) {
    res.status(403).send('Unauthorized');
    return;
  }

  const user = await firebaseAdmin.auth().verifyIdToken(token);
  logger.log(user);
  req.user = user;

  next();
};
