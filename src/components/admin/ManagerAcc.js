import React, { Component } from 'react';

class ManagerAcc extends Component {
    render() {
        return (
            <div className="container-fluid div div-chart-revenue" style={{ height: '560px' }}>
                <div className="row div-overview-title">
                    <div className="col-12">
                        <p className="p-overview-title">TÀI KHOẢN QUẢN LÝ TRANG</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 pt-2 text-center">
                        <div className="btn btn-info btn-custom" data-toggle="modal" data-target="#modalAcc">Thêm mới</div>
                        <div className="form-group mt-2">
                            <input type="text" className="form-control" name="textSearchAcc" id="txtSearchAcc" aria-describedby="helpId" placeholder="Tìm kiếm..." />
                        </div>
                        <table className="table table-bordered table-striped table-hover">
                            <thead>
                                <tr>
                                    <th style={{ width: '5%' }} className="d-sm-table-cell d-none">STT</th>
                                    <th className="d-sm-table-cell d-none">Họ và tên</th>
                                    <th>Tài khoản</th>
                                    <th>Quyền</th>
                                    <th style={{ width: '20%' }} />
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row" className="d-sm-table-cell d-none">1</td>
                                    <td className="text-left d-sm-table-cell d-none">Trần Đức Anh</td>
                                    <td className="text-left">anhtd081095@gmail.com</td>
                                    <td className>Quản trị</td>
                                    <td className="p-0 d-flex flex-row align-items-center justify-content-center border-0" style={{ minHeight: '46px' }}>
                                        <i className="fas fa-retweet text-success mr-2 icon" data-toggle="tooltip" title="Khôi phục mật khẩu" data-placement="auto" />
                                        <i className="fas fa-lock-open text-danger mr-2 icon" data-toggle="tooltip" title="Mở khóa tài khoản" data-placement="auto" />
                                        <i className="fas fa-lock text-danger mr-2 icon" data-toggle="tooltip" title="Khóa tài khoản" data-placement="auto" />
                                        <i className="fas fa-pen text-info icon" data-toggle="modal" data-target="#modalAcc" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <nav aria-label="Page navigation">
                            <ul className="pagination justify-content-center">
                                <li className="page-item disabled">
                                    <a className="page-link" aria-label="Previous">
                                        <span aria-hidden="true">«</span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                </li>
                                <li className="page-item active"><a className="page-link" >1</a></li>
                                <li className="page-item"><a className="page-link" >2</a></li>
                                <li className="page-item">
                                    <a className="page-link" aria-label="Next">
                                        <span aria-hidden="true">»</span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default ManagerAcc;