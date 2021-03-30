// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getAuth } from '../../src/authentication';

export default (req, res) => {
  const isAuth = getAuth();
  res.status(200).json({ isAuth });
};
