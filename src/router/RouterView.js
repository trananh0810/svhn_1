import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './../components/view/home/Home';
import Chat from './../components/view/chat/Chat';
import FindAgain from './../components/view/find-again/FindAgain';
import Feedback from './../components/view/feedback/Feedback';

class RouterView extends Component {
    render() {
        console.log(this.props);

        return (
            <Switch>
                {/* <Route path={`${this.props.match.url}`} component={Home} />
                <Route path={`${this.props.match.url}tro-chuyen`} component={Chat} />
                <Route path={`${this.props.match.url}tim-nguoi`} component={FindAgain} />
                <Route path={`${this.props.match.url}phan-hoi`} component={Feedback} /> */}
                <Route exact path="/" component={Home} />
                <Route path="/tro-chuyen" component={Chat} />
                <Route path="/tim-nguoi" component={FindAgain} />
                <Route path="/phan-hoi" component={Feedback} />
            </Switch>
        );
    }
}

export default RouterView;