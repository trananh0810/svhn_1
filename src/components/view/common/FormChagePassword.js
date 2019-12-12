import React, { Component } from 'react';

class FormChagePassword extends Component {
    render() {
        return (
            <div className="modal fade" id="modalChangePassword" data-backdrop="static" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog modal-sm" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title w-100 text-center text-white">Thay đổi mật khẩu</h5>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="txtCurrentPassword">Mật khẩu hiện tại</label>
                                    <input type="text" className="form-control" name="currentPassword" id="txtCurrentPassword" />
                                    <small className="form-text text-danger">Help text</small>
                                    <label htmlFor="txtNewPassword" className="mt-2">Mật khẩu mới</label>
                                    <input type="text" className="form-control" name="newPassword" id="txtNewPassword" />
                                    <small className="form-text text-danger">Help text</small>
                                    <label htmlFor="txtRePassword" className="mt-2">Nhập lại mật khẩu</label>
                                    <input type="text" className="form-control" name="rePassword" id="txtRePassword" />
                                    <small className="form-text text-danger">Help text</small>
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

export default FormChagePassword;