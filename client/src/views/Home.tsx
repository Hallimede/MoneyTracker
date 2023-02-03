import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Header } from '../components/Header';
import { Table } from '../components/Table';
import { Button } from '../components/Button';
import { socket } from '../utils/socket';

type RowData = {
    catagory: string,
    amount: number
}

export const Home: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {

    const [data, setData] = useState<RowData[]>([]);
    const columns = ['category', 'amount'];
    const fetchSummary = () => {
        const requestData = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        fetch("/summary/", requestData)
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                setData(result);
            },
                (error) => {
                    console.log("api call ", error);
                });
    }

    useEffect(() => {
        socket.on('newRecord', () => {
            fetchSummary();
        });
        fetchSummary();
    }, []);

    return (
        <div>
            <Header title='MoneyTracker' />
            <Table data={data} columns={columns} title={"Expense summary"} />
            <Button active={true} text='Add Expenses' onClick={() => props.history.push('/record')}></Button>
        </div>
    )

}