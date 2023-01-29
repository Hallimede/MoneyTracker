import express, { Router, Request, Response } from "express";
import { Record } from "../models/Record";

const router: Router = express.Router();

router.get("/all", async (_req: Request, res: Response) => {
    const li = [{
        no: 1,
        name: "abc"
    },
    {
        no: 2,
        name: "def"
    }];
    const rec = new Record({
        amount: 60,
        category: "abc",
        time: 123,
        list: li
    });
    console.log(rec);
    // await rec.save();
    res.send(rec);
})

export { router as summaryRouter }