import React, { Component } from 'react';

class Featutes extends Component {
    render() {
        return (
            <section id="sec-features">
                <div className="container pt-5 pb-3">
                    <div className="row">
                        <div className="card bg-transparent border-0 text-center align-items-center col-4 p-0">
                            <img className="card-img-top" src="./assets/images/icon_fast.png" alt="" />
                            <div className="card-body">
                                <h4>Nhanh</h4>
                            </div>
                        </div>
                        <div className="card bg-transparent border-0 text-center align-items-center col-4 p-0">
                            <img className="card-img-top" src="./assets/images/icon_free.png" alt="" />
                            <div className="card-body">
                                <h4>Miễn phí</h4>
                            </div>
                        </div>
                        <div className="card bg-transparent border-0 text-center align-items-center col-4 p-0">
                            <img className="card-img-top" src="./assets/images/icon_security.png" alt="" />
                            <div className="card-body">
                                <h4>Bảo mật</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Featutes;