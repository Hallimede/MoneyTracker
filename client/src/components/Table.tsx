import React, { Component } from 'react'
import '../styles/Table.css';

interface ITableHeaderProps {
    columns: Array<string>
}

interface ITableProps<T> {
    data: Array<T>,
    title: string
}

interface ITableBodyProps<T> extends ITableProps<T>, ITableHeaderProps { }


export type ColumnHeaderCell = {
    name: string,
    key: string
}

export const ColumnHeader: React.FC<{ name: string }> = (props: { name: string }) => {
    return (
        <th className="column-header">
            {props.name}
        </th>
    )
}

export const TableHeader: React.FC<ITableHeaderProps> = (props: ITableHeaderProps) => {

    const headers = props.columns.map((column, index) =>
    (<ColumnHeader
        name={column.charAt(0).toUpperCase() + column.slice(1)}
        key={`head-cell-${index}`}
    />));
    return (
        <thead>
            <tr>{headers}</tr>
        </thead>
    )
}

export const TableBody = <T extends {}>(props: ITableBodyProps<T>) => {
    const rows = props.data.map((row, index) =>
        <tr key={`row-${index}`}>
            {props.columns.map((column, columnIndex) =>
                (<td key={`cell-${index}-${columnIndex}`}>{`${column === 'amount' ? '$' : ''}${row[column]}`}</td>))}
        </tr>
    );
    return (<tbody>{rows}</tbody>)
}

export const Table = <T extends {}>(props: ITableProps<T>) => {
    if (props.data == null) return null;
    const columns = Object.keys(props.data[0]);
    return (
        <div className='table-div'>
            <p className='table-title'>{`${props.title}:`}</p>
            <table>
                <TableHeader columns={columns} />
                <TableBody data={props.data} title={props.title} columns={columns} />
            </table>
        </div>
    )
}