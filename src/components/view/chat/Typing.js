import React, { Component } from 'react';

class Typing extends Component {
    render() {
        return (
            <div className="row mt-2">
                <div className="col-12">
                    <div className="div-mess-item left">
                        <div className="div-icon boy d-flex flex-row justify-content-start">
                            <div>F</div>
                        </div>
                        <div className="div-mess-item-content d-flex align-items-center" style={{ backgroundColor: 'gainsboro', width: '40px', paddingLeft: '12px', height: '20px', borderRadius: '10px' }}>
                            <div className="ticontainer">
                                <div className="tiblock">
                                    <div className="tidot" />
                                    <div className="tidot" />
                                    <div className="tidot" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Typing;