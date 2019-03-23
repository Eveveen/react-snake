import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Snake from '../../component/Snake'

export default class Portal extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Redirect exact from="/" to="/snake" />
                    <Route path="/snake" component={Snake} />
                </Switch>
            </Router>
        )
    }
}