import React, { Component } from 'react';
// import '../../../assets/css/find-again.css';

import ModalPost from './ModalPost';
import ModalPostDetail from './ModalPostDetail';
import PostItem from './PostItem';

let contextPath = window.location.origin;

class FindAgain extends Component {
    render() {
        return (
            <React.Fragment>
                <link rel="stylesheet" type="text/css" href={`${contextPath}/assets/css/find-again.css`} />

                <ModalPost />

                <ModalPostDetail />

                <section id="sec-content-find">
                    <div className="container bg-light py-5">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h3 className="title-1">
                                    Tìm lại người đã mất liên lạc
                                </h3>
                                <div className="btn btn-info btn-custom" data-toggle="modal" data-target="#modal-form-post">
                                    Đăng tin
                                </div>
                                <hr />
                            </div>
                            <div className="col-xl-6 offset-xl-3 d-flex flex-row">
                                <input type="text" className="form-control mr-2" name="postID" id="txtPossID" placeholder="Tìm kiếm theo mã bài viết" style={{ width: '80%' }} />
                                <div className="btn btn-outline-info btn-custom">Tìm kiếm</div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-12">
                                <div className="card-columns">
                                    <PostItem/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center">
                                <div className="btn btn-info btn-custom">Xem thêm</div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default FindAgain;