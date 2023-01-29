import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Header } from '../components/Header'
import { RecordForm } from '../components/RecordForm';
import { Table } from '../components/Table';

type RowData = {
    catagory: string,
    amount: number,
    date: string
}

const data: RowData[] = [{
    date: "1.1.1",
    catagory: "Bills",
    amount: 500
},
{
    date: "1.1.1",
    catagory: "Grocery",
    amount: 500
},
{
    date: "1.1.1",
    catagory: "Health",
    amount: 500
}
];

export default class Record extends Component<RouteComponentProps> {
    render() {
        return (
            <div>
                <Header title='Expenses' back={() => this.props.history.push('/home')} />
                <RecordForm />
                <Table data={data} title={"Expense history"} />
            </div>
        )
    }
}
