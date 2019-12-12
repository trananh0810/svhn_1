import React, { Component } from 'react';

class ModalPost extends Component {
    render() {
        return (
            <div className="modal fade" id="modal-form-post" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" data-backdrop="static" aria-hidden="true">
                <div className="modal-dialog modal-md" role="document">
                    <div className="modal-content">
                        <div className="modal-header justify-content-center" style={{ backgroundColor: '#34495E' }}>
                            <h5 className="modal-title text-white">Tin nhắn</h5>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="txtReceiver">Người nhận:</label>
                                    <input type="text" className="form-control" name="receiver" id="txtReceiver" />
                                    <small id="small-err-receiver" className="form-text text-danger" />

                                    <label htmlFor="txtContent" className="mt-2">Nội dung tin nhắn:</label>
                                    <textarea className="form-control" name="content" id="txtContent" rows={3} defaultValue={""} />
                                    <small id="small-err-content" className="form-text text-danger" />

                                    <label htmlFor="txtPrivateCode" className="mt-2 tooltip-test">Mã bí mật: </label>
                                    <input type="password" className="form-control" name="privateCode" id="txtPrivateCode" data-toggle="tooltip" data-placement="auto" title="Mã bí mật được sử dụng khi bạn muốn sửa tin nhắn" />
                                    <small id="small-err-password" className="form-text text-danger" />

                                    <label htmlFor="cbxContactType" className="mt-2">Loại liên hệ: </label>
                                    <select className="form-control" name="contactType" id="cbxContactType">
                                        <option value="none">-- Chọn loại liên hệ --</option>
                                        <option value="email">Email</option>
                                        <option value="fb">Facebook</option>
                                        <option value="phone">Số điện thoại</option>
                                    </select>
                                    <label htmlFor="txtContactDetail" className="mt-2">Thông tin liên hệ:</label>
                                    <input type="text" className="form-control" name="conteactDetail" id="txtContactDetail" />
                                    <small id="small-err-contactDetail" className="form-text text-danger" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary btn-custom" data-dismiss="modal">Hủy</button>
                            <button type="button" className="btn btn-primary btn-custom">Lưu</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalPost;