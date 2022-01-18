import { Router } from "express";
import { userLogin } from "../Controllers/login.controllers.js";

const router = Router()

router.post('/login', userLogin)

export default router