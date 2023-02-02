import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Header } from '../components/Header'
import { RecordForm } from '../components/RecordForm';
import { Table } from '../components/Table';

type RowData = {
    catagory: number,
    amount: number,
    date: string
}

export const Record: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {

    const [data, setData] = useState<RowData[]>([]);
    const columns = ['date', 'category', 'amount'];

    useEffect(() => {

        const requestData = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch("/record/", requestData)
            .then(res => res.json())
            .then((result) => {
                setData(result);
            },
                (error) => {
                    console.log("api call ", error);
                })

    })

    return (
        <div>
            <Header title='Expenses' back={() => props.history.push('/home')} />
            <RecordForm />
            <Table data={data} columns={columns} title={"Expense history"} />
        </div>
    )
}
