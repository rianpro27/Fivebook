import { Router } from "express";
import { fetchUsers, getUser } from "../controllers/userControllers.js";

const userRouter = Router()

userRouter.get('/', fetchUsers)
userRouter.get('/:id', getUser)

export default userRouter