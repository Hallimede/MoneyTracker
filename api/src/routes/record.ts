import express, { Router } from "express";
import RecordController from "../controllers/RecordController";

const router: Router = express.Router();

router.post("/", RecordController.postNewRecord);

router.get("/", RecordController.getAllRecords);

export { router as recordRouter }