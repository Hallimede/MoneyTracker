import React, { useState } from 'react'
import "../styles/RecordForm.css"
import { MyInputNumber } from './MyInputNumber';
import { MyDropdown } from './MyDropdown';
import { Button } from './Button';


interface IFormRowProps {
    label: string,
    type: number,
    value: number
    onValueChange: (value: number) => void
}

class FormRow extends React.Component<IFormRowProps> {
    render() {
        return <div className='form-row'>
            <span className='row-label'>{this.props.label}</span>
            {this.props.type === 1 ?
                <MyInputNumber amount={this.props.value} onValueChange={this.props.onValueChange} /> :
                <MyDropdown amount={this.props.value} onValueChange={this.props.onValueChange} />
            }
        </div>
    }
}

export const RecordForm: React.FC = (props) => {

    const [amount, setAmount] = useState(0);
    const [catagoryKey, setCatagoryKey] = useState(0);

    const handleAmountChange = (value: number) => {
        setAmount(value);
    }

    const handleCatagoryChange = (value: number) => {
        setCatagoryKey(value);
    }

    const handleSubmit = () => {
        console.log("Submitting...");
        console.log(amount, catagoryKey);
    }

    const active = !(amount === 0 && catagoryKey === 0);

    return (
        <div className='form-div'>
            <p className='form-title'>Add a new expense</p>
            <FormRow label='Amount:' type={1} value={amount} onValueChange={handleAmountChange} />
            <FormRow label='Catagory' type={2} value={catagoryKey} onValueChange={handleCatagoryChange} />
            <div className='submit-button-div'>
                <Button active={active} text='Confirm' onClick={handleSubmit} />
            </div>
        </div>
    )

}