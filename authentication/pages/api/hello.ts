// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import authMiddleware from '../../src/middleware/auth';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const user = await authMiddleware(req, res);
  res.status(200).json({ user });
};
