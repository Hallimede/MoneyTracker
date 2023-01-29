import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Header } from '../components/Header';
import { Table, ColumnHeaderCell } from '../components/Table';
import { Button } from '../components/Button';

type RowData = {
    catagory: string,
    amount: number
}

const data: RowData[] = [{
    catagory: "Bills",
    amount: 500
},
{
    catagory: "Grocery",
    amount: 500
},
{
    catagory: "Health",
    amount: 500
}
];

// const columns: ColumnHeaderCell[] = [{
//     key: 'catagory',
//     name: 'Catagory'
// }, {
//     key: 'amount',
//     name: 'Amount'
// }]

class Home extends Component<RouteComponentProps> {
    render() {
        return (
            <div>
                <Header title='MoneyTracker' />
                <Table data={data} title={"Expense summary"} />
                <Button active={true} text='Add Expenses' onClick={() => this.props.history.push('/record')}></Button>
            </div>
        )
    }
}

export default Home;