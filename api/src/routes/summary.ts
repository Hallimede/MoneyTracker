import express, { Router } from "express";
import RecordController from "../controllers/RecordController";

const router: Router = express.Router();

router.get("/", RecordController.getSummary)

export { router as summaryRouter }