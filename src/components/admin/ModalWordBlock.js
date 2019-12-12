import React, { Component } from 'react';

class ModalWordBlock extends Component {
    render() {
        return (
            <div className="modal fade" id="modalWordBlock" data-backdrop="static" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog modal-sm" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center w-100 text-white">Từ bị chặn</h5>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="wordBlock" id="txtWordBlock" />
                                    <small id="helpId" className="form-text text-muted">Help text</small>
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

export default ModalWordBlock;