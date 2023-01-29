import React from 'react';
import { InputNumber } from 'antd';

export interface IInputNumberProps {
    amount: number,
    onValueChange: (value: number) => void
}

export const MyInputNumber: React.FC<IInputNumberProps> = (props: IInputNumberProps) => {

    const handleNumberChange = (value: number | null) => {
        if (value) props.onValueChange(value);
    }

    return (
        <InputNumber
            style={{
                width: '120px',
                border: '2px solid',
                borderRadius: '0px'
            }}
            defaultValue={(props.amount)}
            precision={2}
            min={0}
            // eslint-disable-next-line
            formatter={(value) => `$ ${Number.parseFloat((value === undefined ? "" : value).toString().replace(/[^\d\.\-]/g, '')).toFixed(2)}`}
            onChange={handleNumberChange}
            size="large"
        />
    )
}