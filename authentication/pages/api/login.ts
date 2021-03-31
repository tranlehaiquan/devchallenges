// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { setLogin } from '../../src/authentication';

export default async (req, res) => {
  let user = await setLogin();

  res.status(200).json({ user })
}
