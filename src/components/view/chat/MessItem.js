import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faCheckCircle, faEye } from '@fortawesome/free-solid-svg-icons';

class MessItem extends Component {
    mess = this.props.message;

    renderIconMess = () => {
        if (this.props.position === "left") {
            return (
                <div className="div-icon boy d-flex flex-row justify-content-start">
                    <div>F</div>
                </div>
            )
        }
    }

    renderContent = () => {
        if (this.mess.contentType === 0) {
            return (
                <div className="content">
                    {this.mess.content}
                </div>
            );
        } else if (this.mess.contentType === 1) {
            return (
                <div className="content">
                    <FontAwesomeIcon icon={faThumbsUp} className="icon" />
                    {/* <i className="fas fa-thumbs-up icon" /> */}
                </div>
            );
        } else if (this.mess.contentType === 2) {
            return (
                <div className="d-flex justify-content-end align-items-end">
                    <a data-fancybox="gallery" href={this.mess.content}>
                        <img src={this.mess.content} className="img-fluid rounded" alt="" />
                    </a>
                </div>
            )
        } else if (this.mess.contentType === 3) {
            return (
                <div>
                    <video id="player" playsInline controls style={{ maxWidth: '70%' }} alt="" className="rounded">
                        <source src={this.mess.content} type="video/mp4" />
                    </video>
                </div>
            )
        }
    }

    renderStatusMess = () => {
        if (this.props.position === "left") {
            return;
        }

        if (this.props.position === "right") {
            if (this.mess.status === 0) {
                return (
                    <FontAwesomeIcon icon={faCheckCircle} className="icon" />
                    // {/* <i className="fas fa-check-circle icon" /> */}
                );
            } else {
                return (
                    <FontAwesomeIcon icon={faEye} className="icon" />
                    // {/* <i className="fas fa-eye icon icon" /> */}
                );
            }
        }
    }

    render() {
        return (
            <div className="row mt-2">
                <div className="col-12">
                    <div className={`div-mess-item right ${this.props.position}`}>
                        {this.renderIconMess()}
                        <div className="div-mess-item-content">

                            {this.renderContent()}

                            <div className="status hide w-100">
                                <div className="div-icon text-right">
                                    {this.renderStatusMess()}
                                </div>
                                <div className="div-time">
                                    {this.props.message.createdDate}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MessItem;