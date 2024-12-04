import { Router } from "express";
import { signup, login, logout } from "../controllers/auth.controller.js";

const router = Router();

router.post('/sign-up', signup)
router.post('/log-in', login)
router.get('/logo-ut', logout)


export default router;