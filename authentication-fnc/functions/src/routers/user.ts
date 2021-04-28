// import { logger } from "firebase-functions";
import { Router, Request, Response } from "express";
import pickBy from "lodash/pickBy";
import pick from "lodash/pick";
import get from "lodash/get";

import { firebaseAuthentication } from "../middleware/firebase-authentication";
import { userRef } from "../firebaseAdmin";

const router = Router(); /* eslint-disable-line new-cap */

export const getUser = async (req: Request, res: Response): Promise<void> => {
  const user = await userRef.child(req.user!.uid).once("value");
  res.json({ user: user.val() });
};

export const updateUser = async (
    req: Request,
    res: Response
): Promise<void> => {
  const userUpdateData = pickBy(
      pick(req.body, ["displayName", "bio", "phoneNumber", "email"]),
      (value) => !!value
  );
  await userRef.child(req.user!.uid).update(userUpdateData);
  const user = await userRef.child(req.user!.uid).once("value");
  res.json({ user });
};

export const updateUserAvatar = async (
    req: Request,
    res: Response
): Promise<void> => {
  const photoURL = get(req.body, "photoURL");
  if (!photoURL) {
    res.json({ error: "Please input url" });
    return;
  }

  await userRef.child(req.user!.uid).update({
    photoURL,
  });
  const user = await userRef.child(req.user!.uid).once("value");
  res.json({ user });
};

router.use(firebaseAuthentication);
router.get("/", getUser);
router.post("/", updateUser);
router.post("/photoURL", updateUserAvatar);

export default router;
