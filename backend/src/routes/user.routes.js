import Router from "express";

import { updateProfilePic } from "../controllers/user.controller.js";

const router = Router();


router.put('/update-profile-pic', protectRoute, updateProfilePic)

export default router;