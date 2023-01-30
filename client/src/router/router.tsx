import React, { Component } from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import { Home } from '../views/Home'
import { Record } from '../views/Record'

export default class IndexRouter extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/record" component={Record} />
                    <Redirect from='/' to='/home' />
                </Switch>
            </HashRouter>
        )
    }
}
