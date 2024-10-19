import express from "express";
import {
  login,
  register,
  adminRegister,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/login", login);
userRouter.post("/register", register);
userRouter.post("/admin-register", adminRegister);

export default userRouter;
