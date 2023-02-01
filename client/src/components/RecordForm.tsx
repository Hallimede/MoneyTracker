import React, { useState } from 'react'
import "../styles/RecordForm.css"
import { MyInputNumber } from './MyInputNumber';
import { MyDropdown } from './MyDropdown';
import { Button } from './Button';

export const RecordForm: React.FC = () => {

    const [amount, setAmount] = useState(0);
    const [catagory, setCatagory] = useState(0);

    const active = !(amount === 0 && catagory === 0);

    const handleAmountChange = (value: number) => {
        setAmount(value);
    }

    const handleCatagoryChange = (value: number) => {
        setCatagory(value);
    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("Submitting...");
        console.log(amount, catagory);

        const postBody = {
            amount,
            catagory
        };

        const requestData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postBody)
        }

        fetch("/record/", requestData)
            .then(res => res.json())
            .then((result) => {
                console.log("api call ", JSON.stringify(result));
            },
                (error) => {
                    console.log("api call ", error);
                });

        setAmount(0);
        setCatagory(0);

    }

    return (
        <div className='form-div'>
            <p className='form-title'>Add a new expense</p>
            <div className='form-row'>
                <span className='row-label'>Amount:</span>
                <MyInputNumber amount={amount} onValueChange={handleAmountChange} />
            </div>
            <div className='form-row'>
                <span className='row-label'>Catagory:</span>
                <MyDropdown catagory={catagory} onCatagoryChange={handleCatagoryChange} />
            </div>
            <div className='submit-button-div'>
                <Button active={active} text='Confirm' onClick={handleSubmit} />
            </div>
        </div>
    )

}