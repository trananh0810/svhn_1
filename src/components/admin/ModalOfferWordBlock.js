import React, { Component } from 'react';

class ModalOfferWordBlock extends Component {
    render() {
        return (
            <div className="modal fade" id="modalOfferWordBlock" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog modal-md" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-white text-center w-100">Đề xuất từ bị chặn</h5>
                        </div>
                        <div className="modal-body">
                            <table className="table table-bordered table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th style={{ width: '10%' }}>STT</th>
                                        <th className="text-center">Từ đề xuất</th>
                                        <th style={{ width: '20%' }} />
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row" className="text-center">1</td>
                                        <td className="text-left">ĐM</td>
                                        <td className="p-0 d-flex flex-row align-items-center justify-content-center" style={{ height: '46px' }}>
                                            <i className="fas fa-check icon text-success mr-2" />
                                            <i className="fas fa-trash-alt text-danger icon" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row" className="text-center">2</td>
                                        <td className="text-left">ĐM</td>
                                        <td className="p-0 d-flex flex-row align-items-center justify-content-center" style={{ height: '46px' }}>
                                            <i className="fas fa-check text-success mr-2 icon" />
                                            <i className="fas fa-trash-alt text-danger icon" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row" className="text-center">3</td>
                                        <td className="text-left">ĐM</td>
                                        <td className="p-0 d-flex flex-row align-items-center justify-content-center" style={{ height: '46px' }}>
                                            <i className="fas fa-check text-success mr-2 icon" />
                                            <i className="fas fa-trash-alt text-danger icon" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row" className="text-center">4</td>
                                        <td className="text-left">ĐM</td>
                                        <td className="p-0 d-flex flex-row align-items-center justify-content-center" style={{ height: '46px' }}>
                                            <i className="fas fa-check text-success mr-2 icon" />
                                            <i className="fas fa-trash-alt text-danger icon" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row" className="text-center">5</td>
                                        <td className="text-left">ĐM</td>
                                        <td className="p-0 d-flex flex-row align-items-center justify-content-center" style={{ height: '46px' }}>
                                            <i className="fas fa-check text-success mr-2 icon" />
                                            <i className="fas fa-trash-alt text-danger icon" />
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
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary btn-custom" data-dismiss="modal">Đóng</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalOfferWordBlock;