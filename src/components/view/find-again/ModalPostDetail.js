import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComment, faEnvelope, faMobile, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

class ModalPostDetail extends Component {
    render() {
        return (
            <div className="modal fade" id="modal-post-detail" data-backdrop="static" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-md" role="document">
                    <div className="modal-content">
                        <div className="modal-header justify-content-center" style={{ backgroundColor: '#34495E' }}>
                            <h5 className="modal-title text-white">Chi tiết tin nhắn</h5>
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-1 d-flex flex-column align-items-center justify-content-center">
                                        <span className="font-weight-bold">#</span>
                                    </div>
                                    <div className="col-xs-11 col-10 font-weight-bold">
                                        123456789
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-1 d-flex flex-column align-items-center justify-content-center">
                                        <FontAwesomeIcon icon={faUser} />
                                    </div>
                                    <div className="col-xs-11 col-10 font-weight-bold">
                                        Bạn abcxyz
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-1 d-flex flex-column align-items-center pt-1">
                                        <FontAwesomeIcon icon={faComment} />
                                    </div>
                                    <div className="col-xs-11 col-10 text-justify">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem animi inventore
                                        voluptate sed magnam esse sequi, fugit deleniti repellat nostrum, ratione cupiditate
                                        debitis consequuntur dolor, atque cum eum temporibus harum?
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-1 d-flex flex-column align-items-center justify-content-center">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </div>
                                    <div className="col-xs-11 col-10">
                                        a@gmai.com
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-1 d-flex flex-column align-items-center justify-content-center">
                                        <FontAwesomeIcon icon={faFacebookSquare} />
                                    </div>
                                    <div className="col-xs-11 col-10">
                                        <a href="fb.com">
                                            facebook.com/abc
                                        </a>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-1 d-flex flex-column align-items-center justify-content-center">
                                        <FontAwesomeIcon icon={faMobile} />
                                    </div>
                                    <div className="col-xs-11 col-10">
                                        <a href="tel:0123456789">
                                            0123456789
                                        </a>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-1 d-flex flex-column align-items-center justify-content-center">
                                        <i className="fas fa-clock" />
                                    </div>
                                    <div className="col-xs-11 col-10">
                                        22/12/2019 14:53
                                    </div>
                                </div>
                                <hr style={{ marginBottom: 0, borderTop: '1px solid #34495E' }} />
                                <div className="row">
                                    <div className="col-12">
                                        <div className="div-list-comment">
                                            <div className="card border-0">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item border-bottom">
                                                        Cras justo odio
                                                        <small className="form-text text-muted">22/12/2019 12:22</small>
                                                    </li>
                                                    <li className="list-group-item border-bottom">
                                                        Dapibus ac facilisis in
                                                    </li>
                                                    <li className="list-group-item border-bottom">
                                                        Dapibus ac facilisis in
                                                    </li>
                                                    <li className="list-group-item border-bottom">
                                                        Dapibus ac facilisis in
                                                    </li>
                                                    <li className="list-group-item border-bottom">
                                                        Dapibus ac facilisis in
                                                    </li>
                                                    <li className="list-group-item border-0">
                                                        Vestibulum at eros Vestibulum at eros Vestibulum at eros Vestibulum at
                                                        eros Vestibulum at eros Vestibulum at eros Vestibulum at eros
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <hr style={{ marginTop: 0, borderTop: '1px solid #34495E' }} />
                                        <form>
                                            <div className="div-input-comment d-flex flex-row justify-content-center align-items-center">
                                                <input type="text" className="form-control" name="comment" id="txtCommnent" placeholder="Bình luận..." />
                                                <FontAwesomeIcon icon={faPaperPlane} className="icon"/>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary btn-custom" data-dismiss="modal">Đóng</button>
                            <button type="button" className="btn btn-warning btn-custom">Sửa</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalPostDetail;