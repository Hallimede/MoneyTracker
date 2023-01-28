import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Button } from '../components/Button'
import { Header } from '../components/Header'
import RecordForm from '../components/RecordForm';

export default class Record extends Component<RouteComponentProps> {
    render() {
        return (
            <div>
                <Header title='Expenses' back={() => this.props.history.push('/home')} />
                <RecordForm />
                <Button active={false} text='Confirm' onClick={() => this.props.history.push('/record')}></Button>
            </div>
        )
    }
}
