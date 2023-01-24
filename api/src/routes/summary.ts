import express, { Router, Request, Response } from "express";
import { Record } from "../models/Record";

const router: Router = express.Router();

router.get("/all", async (_req: Request, res: Response) => {
    const rec = new Record({
        amount: 60,
        category: "abc",
        time: 123
    });
    await rec.save();
    res.send("get all");
})

export { router as summaryRouter }