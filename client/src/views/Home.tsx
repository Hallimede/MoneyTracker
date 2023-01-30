import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Header } from '../components/Header';
import { Table } from '../components/Table';
import { Button } from '../components/Button';

type RowData = {
    catagory: string,
    amount: number
}

export const Home: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {

    const [data, setData] = useState<RowData[]>([]);

    useEffect(() => {

        const requestData = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch("/summary/", requestData)
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                setData(result);
            },
                (error) => {
                    console.log("api call ", error);
                })

    })

    return (
        <div>
            <Header title='MoneyTracker' />
            <Table data={data} title={"Expense summary"} />
            <Button active={true} text='Add Expenses' onClick={(e: React.MouseEvent<HTMLButtonElement>) => props.history.push('/record')}></Button>
        </div>
    )

}