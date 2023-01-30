import Record, { IRecord } from './record';
import Time from '../utils/time';

export interface IRecordReturn {
    amount: number;
    category: number;
    time: string;
}

export interface ISummaryItem {
    amount: number;
    category: number;
}

// export interface ISummary {
//     items: Array<ISummaryItem>;
// }

class RecordModel {
    static async storeNewRecord(record: IRecord): Promise<IRecordReturn> {
        const result: IRecord = await new Record(record).save();
        const resultReturn: IRecordReturn = {
            amount: result.amount,
            category: result.category,
            time: Time.formatTime(result.time)
        }
        return resultReturn;
    }

    static async getAllRecords(): Promise<Array<IRecordReturn>> {
        const all: Array<IRecord> = await Record.find();
        const results: Array<IRecordReturn> = new Array<IRecordReturn>();
        all.map(record => results.push({ amount: record.amount, category: record.category, time: Time.formatTime(record.time) }));
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