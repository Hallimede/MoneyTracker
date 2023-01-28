import React, { Component } from 'react'
import "../styles/RecordForm.css"
import { InputNumber, Dropdown, Button, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

interface IRecordFormState {
    amount: number,
    catagoryKey: number
}

interface IInputNumberProps {
    amount: number,
    onValueChange: (value: number) => void
}


class MyInputNumber extends Component<IInputNumberProps> {

    constructor(props) {
        super(props);
        // this.state = {
        //     amount: 0.00,
        //     // catagoryKey: 1
        // }
    }

    render() {
        const items = [{
            label: 'Bills',
            key: 1
        },
        {
            label: 'Grocery',
            key: 2
        }]

        // const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
        //     this.setState({
        //         catagoryKey: parseInt(key)
        //     })
        // };

        const handleNumberChange = (value: number | null) => {
            if (value) this.props.onValueChange(value);
        }

        // const menu = {
        //     items,
        //     onClick: handleMenuClick
        // }

        return (
            <div className="digit-input-div">
                <InputNumber
                    style={{
                        width: '120px',
                        border: '2px solid',
                        borderRadius: '0px'
                    }}
                    defaultValue={(this.props.amount)}
                    precision={2}
                    min={0}
                    formatter={(value) => `$ ${Number.parseFloat((value === undefined ? "" : value).toString().replace(/[^\d\.\-]/g, '')).toFixed(2)}`}
                    onChange={handleNumberChange}
                    size="large"
                />
                {/* <Dropdown menu={menu}>
                    <Button style={{
                        width: '120px',
                        border: '2px solid',
                        borderRadius: '0px'
                    }} size="large">
                        <Space>
                            {(items.find(i => i.key === this.state.catagoryKey))?.label}
                            <DownOutlined />
                        </Space>
                    </Button>
                </Dropdown> */}
            </div>

        )
    }


}

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
            {this.props.type === 1 ? <MyInputNumber amount={this.props.value} onValueChange={this.props.onValueChange} /> : null}
        </div>
    }
}

class RecordForm extends Component<{}, IRecordFormState> {

    constructor(props) {
        super(props);
        this.state = {
            amount: 0.00,
            catagoryKey: 1
        }
    }

    handleAmountChange = (value: number) => {
        this.setState({
            amount: value
        })
    }

    render() {
        return (
            <div className='form-div'>
                <p className='form-title'>Add a new expense</p>
                <FormRow label='Amount:' type={1} value={this.state.amount} onValueChange={this.handleAmountChange} />
                {/* <FormRow label='Catagory' type={2} value={this.state.catagoryKey} /> */}
                {/* <MyInputNumber /> */}

            </div>
        )
    }
}

export default RecordForm;