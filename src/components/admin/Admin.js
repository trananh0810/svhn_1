import React, { Component } from 'react';
import Header from './Header';
import ManagerAcc from './ManagerAcc';
import Setting from './Setting';
import WordBlock from './WordBlock';
import ModalAcc from './ModalAcc';
import ModalOfferWordBlock from './ModalOfferWordBlock';
import ModalWordBlock from './ModalWordBlock';
import FormChagePassword from './../view/common/FormChagePassword';

let contextPath = window.location.origin;

class Admin extends Component {
    render() {
        return (
            <React.Fragment>
                <link rel="stylesheet" type="text/css" href={`${contextPath}/assets/css/admin/common.css`} />
                <link rel="stylesheet" type="text/css" href={`${contextPath}/assets/css/admin/overview.css`} />

                <Header />

                <div id="div-body" className="container-fluid mt-3">
                    <div className="row">
                        <div className="col-12">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-xl-8 col-12">
                                        <ManagerAcc/>

                                        <Setting/>
                                    </div>
                                    <div className="col-xl-4 col-12 mt-xl-0 my-3">
                                        <WordBlock/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ModalAcc/>

                <ModalOfferWordBlock/>

                <ModalWordBlock/>

                <FormChagePassword/>
            </React.Fragment>
        );
    }
}

export default Admin;