import express, { Router } from "express";

import { authController } from "../controllers";
import { registerMiddleware } from "../middleware";
const authRouter: Router = express.Router();

authRouter.get("/", authController.authTest);
authRouter.get("/login", authController.authLoginTest);
authRouter.post("/register", registerMiddleware.validateInput, authController.authRegisterTest);

export default authRouter;
