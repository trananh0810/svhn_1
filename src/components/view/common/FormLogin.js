import React, { Component } from 'react';

class FormLogin extends Component {
    render() {
        return (
            <div className="modal fade" id="modalLogin" data-backdrop="static" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog modal-sm" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title w-100 text-center text-white">Đăng nhập</h5>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="txtUsername">Tên đăng nhập</label>
                                    <input type="text" className="form-control" name="username" id="txtUsername" />
                                    <small id="small-err-username" className="form-text text-danger">Help text</small>
                                    <label htmlFor="txtPassword" className="mt-2">Mật khẩu</label>
                                    <input type="text" className="form-control" name="password" id="txtPassword" />
                                    <small id="small-err-password" className="form-text text-danger">Help text</small>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary btn-custom" data-dismiss="modal">Hủy</button>
                            <button type="button" className="btn btn-info btn-custom">Đăng nhập</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormLogin;