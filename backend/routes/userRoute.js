import express from 'express';
import { loginUser,registerUser,getUsers } from '../controllers/userController.js';
const userRouter = express.Router();

userRouter.post("/register",registerUser);
userRouter.post("/login",loginUser);
userRouter.get("/list",getUsers)

export default userRouter;