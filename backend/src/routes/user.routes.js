import Router from "express";

import { updateProfilePic, getUsersForSideBar, updateGeneralInfo } from "../controllers/user.controller.js";

import { protectRoute } from "../middlewares/validateToken.js";

const router = Router();


router.get('/get-users', protectRoute, getUsersForSideBar)
router.put('/update-general-info', protectRoute, updateGeneralInfo)
router.put('/update-profile-pic', protectRoute, updateProfilePic)

export default router;