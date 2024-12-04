import { Router } from "express";
import { signup, login, logout, checkAuth } from "../controllers/auth.controller.js";
import { protectRoute } from "../middlewares/valiteToken.js";

const router = Router();

router.post('/sign-up', signup)
router.post('/log-in', login)
router.get('/logo-ut', logout)

router.get('/check', protectRoute, checkAuth )


export default router;