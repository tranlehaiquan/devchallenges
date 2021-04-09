import { Router, Request, Response } from "express";
import { logger } from "firebase-functions";
import { firebaseAuthentication } from '../middleware/firebase-authentication';

const router = Router(); /* eslint-disable-line new-cap */

export const getUser = async (req: Request, res: Response): Promise<void> => {
  logger.log(req.user);
  console.log(req.user);
  res.json({ user: req.user });
};

export const updateUser = async (req: Request, res: Response): Promise<void> => {
  res.send("updateUser");
};

router.use(firebaseAuthentication);
router.get("/", getUser);
router.post("/", updateUser);

export default router;
