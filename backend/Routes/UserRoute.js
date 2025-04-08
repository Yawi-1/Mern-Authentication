import { Router } from "express";
import { ensureAuthenticated } from "../Middlewares/Auth.js";
import User from "../Models/userModal.js";

export const UserRouter = Router();

UserRouter.get('/', async(req, res) => {
  const allUsers = await User.find({});
  res.send(allUsers)
})

UserRouter.get('/:id', async(req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  res.send(user)
})