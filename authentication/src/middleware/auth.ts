import type { NextApiRequest, NextApiResponse } from 'next';
import firebaseAdmin from '../firebaseAdmin';

// if isRequiredSigned -> throw error
const authMiddleware = async (req: NextApiRequest, res: NextApiResponse, isRequiredSigned: boolean = false) => {
  try {
    const { token } = req.cookies;

    if(token) {
      return await firebaseAdmin.auth().verifyIdToken(token);
    }
  } catch (err) {
    if(isRequiredSigned) {
      res.json(err);
    }
  }
};

export default authMiddleware;
