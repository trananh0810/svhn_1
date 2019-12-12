import React, { Component } from 'react';

class ModalOption extends Component {
    render() {
        return (
            <div className="modal fade" id="modalOptions" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center w-100 text-white">Cài đặt</h5>
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12">
                                        <p className="m-0">Giới tính của bạn:</p>
                                        <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                            <label className="btn btn-outline-info active">
                                                <input type="radio" name="options" id="option1" defaultChecked /> Nam
                                            </label>
                                            <label className="btn btn-outline-danger">
                                                <input type="radio" name="options" id="option2" /> Nữ
                                            </label>
                                            <label className="btn btn-outline-secondary">
                                                <input type="radio" name="options" id="option3" /> Khác
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-12">
                                        <p className="m-0">Giới tính bạn muốn nói chuyện:</p>
                                        <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                            <label className="btn btn-outline-info active">
                                                <input type="radio" name="options" id="option1" /> Nam
                                            </label>
                                            <label className="btn btn-outline-danger">
                                                <input type="radio" name="options" id="option2" defaultChecked /> Nữ
                                            </label>
                                            <label className="btn btn-outline-secondary">
                                                <input type="radio" name="options" id="option3" /> Tất cả
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-12">
                                        <p className="m-0">Âm thanh:</p>
                                        <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                            <label className="btn btn-outline-info active">
                                                <input type="radio" name="options" id="option1" /> Bật
                                            </label>
                                            <label className="btn btn-outline-danger">
                                                <input type="radio" name="options" id="option2" defaultChecked /> Tắt
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalOption;