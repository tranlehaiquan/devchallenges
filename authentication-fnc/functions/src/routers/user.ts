// import { logger } from "firebase-functions";
import { Router, Request, Response } from "express";
import { firebaseAuthentication } from "../middleware/firebase-authentication";
import { userRef } from "../firebaseAdmin";

const router = Router(); /* eslint-disable-line new-cap */

export const getUser = async (req: Request, res: Response): Promise<void> => {
  console.log('get user', req.user!.uid);
  const user = await userRef.child(req.user!.uid).once('value')
  console.log(user.val());
  res.json({ user: user.val() });
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  res.send("updateUser");
};

router.use(firebaseAuthentication);
router.get("/", getUser);
router.post("/", updateUser);

export default router;
