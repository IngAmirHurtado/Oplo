import Router from "express";

import { updateProfilePic } from "../controllers/user.controller.js";

import { protectRoute } from "../middlewares/valiteToken.js";

const router = Router();


router.put('/update-profile-pic', protectRoute, updateProfilePic)

export default router;