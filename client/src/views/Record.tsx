import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Header } from '../components/Header';
import { RecordForm } from '../components/RecordForm';
import { Table } from '../components/Table';
import { socket } from '../utils/socket';
import store from '../store/store';
import { ADD_RECORD } from '../constants/actionTypes'
import { shallowEqual, useSelector } from 'react-redux';


export const Record: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {

    const records = store.getState().records;
    // const records: IRecordItem[] = useSelector((state: RecordsState) => state.records, shallowEqual);

    const [data, setData] = useState<IRecordItem[]>(records);
    const columns: string[] = ['date', 'category', 'amount'];
    const fetchRecords: () => void = () => {
        const requestData = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch("/record/", requestData)
            .then(res => res.json())
            .then((result) => {
                store.dispatch({ type: ADD_RECORD, records: result });
                setData(store.getState().records);
                console.log("after dispatch", store.getState().records)
            },
                (error) => {
                    console.log("api call ", error);
                })
    }

    useEffect(() => {
        socket.on('newRecord', (ndata: IRecordItem) => {
            console.log("coming", ndata);
            setData(data => [ndata, ...data]);
            store.dispatch({ type: ADD_RECORD, records: [ndata] });
        });
        fetchRecords();
    }, [])

    return (
        <div>
            <Header title='Expenses' back={() => props.history.push('/home')} />
            <RecordForm />
            <Table data={data} columns={columns} title={"Expense history"} />
        </div>
    )
}
