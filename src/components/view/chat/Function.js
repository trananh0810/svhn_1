import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faCog } from '@fortawesome/free-solid-svg-icons';

class Function extends Component {
    render() {
        return (
            <div id="div-tab-func" className="row d-flex flex-row justify-content-center align-items-center">
                <FontAwesomeIcon icon={faSignOutAlt} rotation={180} className=" icon text-danger"/>
                <FontAwesomeIcon icon={faCog} className="icon active" data-toggle="modal" data-target="#modalOptions" />
                {/* <i className="fas fa-sign-out-alt fa-rotate-180 icon text-danger" /> */}
                {/* <i class="fas fa-comment-alt icon active"></i> */}
                {/* <i className="fas fa-cog icon active" data-toggle="modal" data-target="#modalOptions" /> */}
            </div>
        );
    }
}

export default Function;