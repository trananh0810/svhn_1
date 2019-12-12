import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import View from './../components/view/View';
import Admin from './../components/admin/Admin';
import NotFound from './../components/NotFound';
import Chat from './../components/view/chat/Chat';
import Home from './../components/view/home/Home';
import FindAgain from './../components/view/find-again/FindAgain';
import Feedback from './../components/view/feedback/Feedback';

class RouterApp extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={View} />
                <Route path="/quan-ly" component={Admin} />
                <Route path="*" component={NotFound} />
            </Switch>
        );
    }
}

export default RouterApp;