import React, { Component } from 'react';

class WordBlock extends Component {
    render() {
        return (
            <div className="container-fluid div div-word-block">
                <div className="row div-overview-title">
                    <div className="col-12">
                        <p className="p-overview-title">DANH SÁCH TỪ BỊ CHẶN</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 pt-2 text-center">
                        <div className="btn btn-info btn-custom" data-toggle="modal" data-target="#modalWordBlock">Thêm mới</div>
                        <div className="form-group mt-2">
                            <input type="text" className="form-control" name="textSearchWordBlock" id="txtSearchWordBlock" aria-describedby="helpId" placeholder="Tìm kiếm..." />
                        </div>
                        <table className="table table-bordered table-striped table-hover">
                            <thead>
                                <tr>
                                    <th style={{ width: '10%' }}>STT</th>
                                    <th>Từ bị chặn</th>
                                    <th style={{ width: '20%' }} />
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row">1</td>
                                    <td className="text-left">ĐM</td>
                                    <td className="p-0 d-flex flex-row align-items-center justify-content-center border-0" style={{ height: '46px' }}>
                                        <i className="fas fa-trash-alt text-danger mr-2 icon" />
                                        <i className="fas fa-pen text-info icon" data-toggle="modal" data-target="#modalWordBlock" />
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">2</td>
                                    <td className="text-left">ĐM</td>
                                    <td className="p-0 d-flex flex-row align-items-center justify-content-center" style={{ height: '46px' }}>
                                        <i className="fas fa-trash-alt text-danger mr-2 icon" />
                                        <i className="fas fa-pen text-info icon" />
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">3</td>
                                    <td className="text-left">ĐM</td>
                                    <td className="p-0 d-flex flex-row align-items-center justify-content-center" style={{ height: '46px' }}>
                                        <i className="fas fa-trash-alt text-danger mr-2 icon" />
                                        <i className="fas fa-pen text-info icon" />
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">4</td>
                                    <td className="text-left">ĐM</td>
                                    <td className="p-0 d-flex flex-row align-items-center justify-content-center" style={{ height: '46px' }}>
                                        <i className="fas fa-trash-alt text-danger mr-2 icon" />
                                        <i className="fas fa-pen text-info icon" />
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">5</td>
                                    <td className="text-left">ĐM</td>
                                    <td className="p-0 d-flex flex-row align-items-center justify-content-center" style={{ height: '46px' }}>
                                        <i className="fas fa-trash-alt text-danger mr-2 icon" />
                                        <i className="fas fa-pen text-info icon" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <nav aria-label="Page navigation">
                            <ul className="pagination justify-content-center">
                                <li className="page-item disabled">
                                    <a className="page-link"  aria-label="Previous">
                                        <span aria-hidden="true">«</span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                </li>
                                <li className="page-item active"><a className="page-link" >1</a></li>
                                <li className="page-item"><a className="page-link" >2</a></li>
                                <li className="page-item">
                                    <a className="page-link"  aria-label="Next">
                                        <span aria-hidden="true">»</span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className="btn btn-secondary btn-custom mb-2" data-toggle="modal" data-target="#modalOfferWordBlock">
                            Danh sách đề xuất
              <span className="badge badge-pill badge-light">1</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WordBlock;