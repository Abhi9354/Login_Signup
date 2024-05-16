import express from "express";
import { login, profile, register, remove } from "../controllers/user-controller.js";

export const userRouter = express.Router();

userRouter.post ('/login',login)
userRouter.post ('/register',register)
userRouter.get ('/profile',profile)
userRouter.post ('/remove',remove)


