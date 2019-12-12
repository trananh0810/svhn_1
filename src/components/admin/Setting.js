import React, { Component } from 'react';

class Setting extends Component {
    render() {
        return (
            <div className="container-fluid div-order-now mt-3">
                <div className="row">
                    <div className="col-12 bg-white rounded pb-3 border-left mt-md-0 mt-3" style={{ minHeight: '185px' }}>
                        <div className="row div-overview-title">
                            <div className="col-12">
                                <p className="p-overview-title">CÀI ĐẶT</p>
                            </div>
                        </div>
                        <div className="row div-order-now-content">
                            <div className="col-md-3 col-sm-6 col-12 mt-3">
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" defaultChecked className="custom-control-input" id="switchImage" />
                                    <label className="custom-control-label" htmlFor="switchImage">Gửi ảnh</label>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-12 mt-3">
                                <div className="custom-control custom-switch">
                                    <input type="checkbox" defaultChecked className="custom-control-input" id="switchVideo" />
                                    <label className="custom-control-label" htmlFor="switchVideo">Gửi video</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Setting;