import { Router } from "express";
import user from "./user";

const router = Router(); /* eslint-disable-line new-cap */

router.use("/me", user);

export default router;
