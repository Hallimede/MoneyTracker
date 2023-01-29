import React from 'react';
import { InputNumber } from 'antd';

export interface IInputNumberProps {
    amount: number,
    onValueChange: (value: number) => void
}

export const MyInputNumber: React.FC<IInputNumberProps> = (props: IInputNumberProps) => {

    const handleNumberChange = (value: number | null) => {
        if (value) props.onValueChange(value);
    };

    // eslint-disable-next-line
    const formatter = (value) => `$ ${Number.parseFloat((value === undefined ? "" : value).toString().replace(/[^\d\.\-]/g, '')).toFixed(2)}`;

    return (
        <InputNumber
            style={{
                width: '120px',
                border: '2px solid',
                borderRadius: '0px'
            }}
            defaultValue={0}
            precision={2}
            min={0}
            formatter={formatter}
            onChange={handleNumberChange}
            size="large"
        />
    )
}