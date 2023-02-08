import Record, { IRecord } from './record';
import Time from '../utils/time';

export interface IRecordReturn {
    date: string;
    category: number;
    amount: number;
}

export interface ISummaryItem {
    category: number;
    amount: number;
}

class RecordModel {
    static async storeNewRecord(record: IRecord): Promise<IRecordReturn> {
        const result: IRecord = await new Record(record).save();
        const resultReturn: IRecordReturn = {
            amount: result.amount,
            category: result.category,
            date: Time.formatTime(result.date)
        }
        return resultReturn;
    }

    static async getAllRecords(): Promise<Array<IRecordReturn>> {
        const all: Array<IRecord> = await Record.find().sort({ date: 'desc' });
        const results: Array<IRecordReturn> = new Array<IRecordReturn>();
        all.map(record => results.push({ amount: record.amount, category: record.category, date: Time.formatTime(record.date) }));
        return results;
    }

    static async getSummary(): Promise<Array<ISummaryItem>> {
        const all: Array<IRecord> = await Record.find();

        const map: Map<number, number> = new Map<number, number>();

        const results: Array<ISummaryItem> = new Array<ISummaryItem>();
        all.map(record => {
            const value = map.get(record.category)
            if (value != undefined) {
                map.set(record.category, value + record.amount);
            }
            else {
                map.set(record.category, record.amount);
            }
        });

        map.forEach((value: number, key: number) => {
            results.push({ category: key, amount: value });
        });

        return results;
    }
}

export default RecordModel;