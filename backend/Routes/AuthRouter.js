import { Router } from "express";
const router = Router();
import UserModal from '../Models/userModal.js'
import {signup} from '../AuthControllers/AuthController.js'

router.post('/signup',signup)

export default router;