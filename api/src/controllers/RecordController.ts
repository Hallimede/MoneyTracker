import { Request, Response } from "express";
import RecordModel, { IRecordReturn } from "../models/RecordModel";
import Time from "../utils/Time";
import { IRecord } from '../models/Record';

class RecordController {

    static postNewRecord = (async function unboundPostNewRecord(req: Request, res: Response) {
        const rec: IRecord = {
            amount: req.body.amount,
            category: req.body.catagory,
            time: Time.getCurrentTime()
        };
        const result: IRecordReturn = await RecordModel.storeNewRecord(rec);
        console.log(result);
        res.status(201).send(result);
    }).bind(this);

    static getAllRecords = (async function unboundGetAllRecords(_req: Request, res: Response) {

        const results: Array<IRecordReturn> = await RecordModel.getAllRecords()
        res.status(200).send(results);

    }).bind(this);

    static getSummary = (async function unboundGetSummary(_req: Request, res: Response) {
        res.status(200).send(await RecordModel.getSummary());
    }).bind(this);

}

export default RecordController;