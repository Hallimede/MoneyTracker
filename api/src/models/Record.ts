import { Schema, Model, model } from "mongoose";

export interface IRecord {
    date: number;
    category: number;
    amount: number;
}

export const RecordSchema: Schema = new Schema<IRecord>({
    amount: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: Number,
        required: true
    },
    date: {
        type: Number,
        required: true
    }
});

const Record: Model<IRecord> = model<IRecord>('Record', RecordSchema);

export default Record;

