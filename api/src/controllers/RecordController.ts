import { Request, Response } from "express";
import RecordModel, { IRecordReturn } from "../models/RecordModel";
import Time from "../utils/Time";
import { IRecord } from '../models/Record';
import { io } from "../index"

type ControllorFunction = (req: Request, res: Response) => void

class RecordController {

    static postNewRecord: ControllorFunction = (async function unboundPostNewRecord(req: Request, res: Response) {
        const rec: IRecord = {
            amount: req.body.amount,
            category: req.body.catagory,
            date: Time.getCurrentTime()
        };
        const result: IRecordReturn = await RecordModel.storeNewRecord(rec);
        console.log(result);
        io.emit('newRecord', result);
        res.status(201).send(result);
    }).bind(this);

    static getAllRecords: ControllorFunction = (async function unboundGetAllRecords(_req: Request, res: Response) {
        const results: Array<IRecordReturn> = await RecordModel.getAllRecords()
        res.status(200).send(results);
    }).bind(this);

    static getSummary: ControllorFunction = (async function unboundGetSummary(_req: Request, res: Response) {
        res.status(200).send(await RecordModel.getSummary());
    }).bind(this);

}

export default RecordController;