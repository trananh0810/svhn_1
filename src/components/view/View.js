import React, { Component } from 'react';

import Header from './common/Header';
import Footer from './common/Footer';
import FormLogin from './common/FormLogin';
import FormChagePassword from './common/FormChagePassword';
import RouterView from '../../router/RouterView';

class View extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>

                <RouterView/>

                <Footer/>

                <FormLogin/>

                <FormChagePassword/>
            </React.Fragment>
        );
    }
}

export default View;