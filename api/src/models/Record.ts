import { Schema, Model, model } from "mongoose";

interface IRecord {
    amount: number;
    category: string;
    time: number;
}

const recordSchema: Schema = new Schema<IRecord>({
    amount: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true
    }
});

const Record: Model<IRecord> = model<IRecord>('Record', recordSchema);

export { Record };

