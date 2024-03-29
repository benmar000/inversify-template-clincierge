import express, { Request, Response } from "express";
import customersRouter from "./customersRouter";
import petsRouter from "./petsRouter";

// Router
const router = express.Router();
// index
router.get("/", (req: Request, res: Response) => {
  res.send("API is working properly");
});

// routers
router.use("/customers", customersRouter);
router.use("/pets", petsRouter);

export default router;
