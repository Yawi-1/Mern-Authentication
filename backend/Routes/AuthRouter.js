import { Router } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
const router = Router();    
import {signup} from '../AuthControllers/AuthController.js'
import {login} from '../AuthControllers/AuthController.js'

dotenv.config()
router.post('/signup',signup)
router.post('/login',login)
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
router.get(
    "/google/callback",
    passport.authenticate("google", { session: false }),
    (req, res) => {
      const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "7d",
      });
  
      res.redirect(`http://localhost:5173/home?token=${token}`);

    }
  );

export default router;