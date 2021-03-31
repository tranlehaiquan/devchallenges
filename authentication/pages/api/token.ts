// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getAuth, loginWithToken } from '../../src/authentication';

export default async (req, res) => {
  const user = await loginWithToken();
  res.status(200).json({ user });
};
