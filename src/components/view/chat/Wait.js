import React, { Component } from 'react';

class Wait extends Component {
    render() {
        return (
            <div id="div-wait" className="d-flex flex-column justify-content-center align-items-center">
                <p>Nhấn đề tìm bạn trò chuyện</p>
                <div id="btn-find-friend" className="btn btn-info btn-custom animated">Tìm bạn</div>
                {/* <div className="spinner-border text-info" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="btn btn-danger btn-custom mt-2">Hủy</div> */}
            </div>
        );
    }
}

export default Wait;