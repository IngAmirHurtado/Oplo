import Router from "express";

import { updateProfilePic, getUsersForSideBar } from "../controllers/user.controller.js";

import { protectRoute } from "../middlewares/validateToken.js";

const router = Router();


router.get('/users', protectRoute, getUsersForSideBar)
router.put('/update-profile-pic', protectRoute, updateProfilePic)

export default router;