import express, { Router } from "express";

import authRouter from "./auth.router.js";
// import buyerRouter from "./buyer.router.js";
// import employeeRouter from "./employee.router.js";
// import invoiceRouter from "./Invoice.router.js";
// import partyRouter from "./paty.router.js";
// import payerRouter from "./payer.router.js";
// import profileRouter from "./profile.router.js";
// import userRouter from "./user.router.js";

const routers: Router = express.Router();
routers.use("/auth", authRouter);
// routers.use("/buyer", buyerRouter);
// routers.use("/employee", employeeRouter);
// routers.use("/invoice", invoiceRouter);
// routers.use("/party", partyRouter);
// routers.use("/payer", payerRouter);
// routers.use("/profile", profileRouter);
// routers.use("/user", userRouter);

export default routers;
