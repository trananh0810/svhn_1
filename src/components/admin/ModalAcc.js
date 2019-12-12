import React, { Component } from 'react';

class ModalAcc extends Component {
    render() {
        return (
            <div className="modal fade" id="modalAcc" data-backdrop="static" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog modal-sm" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title w-100 text-center text-white">Chi tiết tài toản</h5>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="txtFullName">Họ và tên</label>
                                    <input type="text" className="form-control" name="fullName" id="txtFullName" />
                                    <small id="small-err-fullname" className="form-text text-danger">Help text</small>
                                    <label htmlFor="txtEmail">Email</label>
                                    <input type="email" className="form-control" name="email" id="txtEmail" />
                                    <small id="small-err-email" className="form-text text-danger">Help text</small>
                                    <label htmlFor="txtPassword">Mật khẩu</label>
                                    <input type="password" className="form-control" name="password" id="txtPassword" />
                                    <small id="small-err-password" className="form-text text-danger">Help text</small>
                                    <label htmlFor="txtRepassword">Email</label>
                                    <input type="password" className="form-control" name="repassword" id="txtRepassword" />
                                    <small id="small-err-repassword" className="form-text text-danger">Help text</small>
                                    <label htmlFor="cbxRole">Quyền</label>
                                    <select className="form-control" name="role" id="cbxRole">
                                        <option value={1}>Quản trị</option>
                                        <option value={2}>Quản lý</option>
                                        <option />
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary btn-custom" data-dismiss="modal">Hủy</button>
                            <button type="button" className="btn btn-info btn-custom">Lưu</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalAcc;