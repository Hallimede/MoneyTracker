import React from 'react'
import '../styles/Table.css';
import { Category } from '../utils/category';

interface ITableHeaderProps {
    columns: Array<string>
}

interface ITableProps<T> {
    data: Array<T> | null,
    columns: Array<string>,
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

    const headers: JSX.Element[] = props.columns.map((column, index) =>
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

// eslint-disable-next-line
export const TableBody = <T extends {}>(props: ITableBodyProps<T>) => {
    if (props.data == null) return null;
    const rows: JSX.Element[] = props.data.map((row, index) => {
        return (<tr key={`row-${index}`}>
            {props.columns.map((column, columnIndex) => {
                let display: string = row[column];
                // eslint-disable-next-line
                if (column == 'amount') display = `$ ${Number.parseFloat((display === undefined ? "" : display).toString().replace(/[^\d\.\-]/g, '')).toFixed(2)}`;
                if (column == 'category') display = Category.getCategoryString(parseInt(row[column]), 'None');
                return (<td key={`cell-${index}-${columnIndex}`}>{display}</td>)
            })}
        </tr>)
    });
    return (<tbody>{rows}</tbody>)
}

// eslint-disable-next-line
export const Table = <T extends {}>(props: ITableProps<T>) => {
    if (props.data == null || props.data.length === 0) return null;
    const columns = props.columns == null ? Object.keys(props.data[0]) : props.columns;
    return (
        <div className='table-div'>
            <p className='table-title'>{`${props.title}:`}</p>
            <table>
                <TableHeader columns={columns} />
                <TableBody data={props.data} columns={columns} title={props.title} />
            </table>
        </div>
    )
}