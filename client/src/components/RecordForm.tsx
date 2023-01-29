import React, { useEffect, useState } from 'react'
import "../styles/RecordForm.css"
import { MyInputNumber } from './MyInputNumber';
import { MyDropdown } from './MyDropdown';
import { Button } from './Button';

export const RecordForm: React.FC = (props) => {

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
    }

    useEffect(() => {
        fetch("/summary/all")
            .then(res => res.json())
            .then((result) => {
                console.log("api call ", JSON.stringify(result));
                // this.setState({
                //     list: result.list
                // });
                // console.log("look at list:", this.state.list);
            },
                (error) => {
                    console.log("api call ", error);
                })
    })

    const items = [
        {
            label: 'Bills',
            key: 1
        },
        {
            label: 'Grocery',
            key: 2
        }]

    return (
        <div className='form-div'>
            <p className='form-title'>Add a new expense</p>
            <div className='form-row'>
                <span className='row-label'>Amount:</span>
                <MyInputNumber amount={amount} onValueChange={handleAmountChange} />
            </div>
            <div className='form-row'>
                <span className='row-label'>Catagory:</span>
                <MyDropdown catagory={catagory} onCatagoryChange={handleCatagoryChange} items={items} />
            </div>
            <div className='submit-button-div'>
                <Button active={active} text='Confirm' onClick={handleSubmit} />
            </div>
        </div>
    )

}