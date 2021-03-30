// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getAuth, setLogin } from '../../src/authentication';

export default (req, res) => {
  const isAuth = getAuth();
  let isFirstTime = false;

  if(!isAuth) {
    setLogin();
    isFirstTime = true;
  };

  res.status(200).json({ isFirstTime })
}
