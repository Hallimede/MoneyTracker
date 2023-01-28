import React, { Component } from 'react'
import '../styles/Table.css';

interface IColumnProps {
    name: string
}

interface ITableHeaderProps {
    columns: Array<ColumnHeaderCell>
}

interface ITableProps {
    data: Array<RowData>,
    columns: Array<ColumnHeaderCell>
}

export type RowData = {
    catagory: string,
    amount: number
}

export type ColumnHeaderCell = {
    name: string,
    key: string
}

class ColumnHeader extends Component<IColumnProps> {
    render() {
        return (
            <th className="column-header">
                {this.props.name}
            </th>
        )
    }
}

class TableHeader extends Component<ITableHeaderProps> {
    render() {
        const headers = this.props.columns.map((column, index) => (<ColumnHeader name={column.name} key={`head-cell-${index}`} />));
        return (
            <thead>
                <tr>{headers}</tr>
            </thead>
        )
    }
}

class TableBody extends Component<ITableProps> {

    render() {

        const rows = this.props.data.map((row, index) =>
            <tr key={`row-${index}`}>
                {this.props.columns.map((column, columnIndex) =>
                    (<td key={`cell-${index}-${columnIndex}`}>{`${column.key === 'amount' ? '$' : null}${row[column.key]}`}</td>))}
            </tr>
        );

        return (<tbody>{rows}</tbody>)
    }
}

class Table extends Component<ITableProps> {
    render() {
        return (
            <div className='table-div'>
                <p className='table-title'>Expense Summary:</p>
                <table>
                    <TableHeader columns={this.props.columns} />
                    <TableBody data={this.props.data} columns={this.props.columns} />
                </table>
            </div>
        )
    }
}

export default Table;