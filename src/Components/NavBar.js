import React, { Component } from 'react'
import {BrowserRouter , Route,Switch} from 'react-router-dom';
import Home from './Home'
import About from './About'

import Register from './register';
export default class NavBar extends Component {
    render() {
        return (
            <BrowserRouter>
                 <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/register" component={Register} />
                 </Switch>
            </BrowserRouter>
        )
    }
}
