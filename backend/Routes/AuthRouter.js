import { Router } from "express";
const router = Router();    
import {signup} from '../AuthControllers/AuthController.js'
import {login} from '../AuthControllers/AuthController.js'

router.post('/signup',signup)
router.post('/login',login)

export default router;