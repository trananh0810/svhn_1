import React, { Component } from 'react';

class Statiscial extends Component {
    render() {
        return (
            <section id="sec-statistical">
                <div className="container py-5">
                    {/* <div className="row">
                        <div className="col-12 text-center">
                            <h3 className="title-1">Thống kê</h3>
                        </div>
                    </div> */}
                    <div className="row mt-3">
                        <div className="card bg-transparent border-0 text-center align-items-center col-3 p-0">
                            <img className="card-img-top" src="./assets/images/icon_user_online.png" alt="" />
                            <div className="card-body px-0 pb-0">
                                <h5>Trực tuyến</h5>
                                <p className="font-weight-bold">1000</p>
                            </div>
                        </div>
                        <div className="card bg-transparent border-0 text-center align-items-center col-3 p-0">
                            <img className="card-img-top" src="./assets/images/icon_male.png" alt="" />
                            <div className="card-body px-0 pb-0">
                                <h5>Nam</h5>
                                <p className="font-weight-bold">1000</p>
                            </div>
                        </div>
                        <div className="card bg-transparent border-0 text-center align-items-center col-3 p-0">
                            <img className="card-img-top" src="./assets/images/icon_female.png" alt="" />
                            <div className="card-body px-0 pb-0">
                                <h5>Nữ</h5>
                                <p className="font-weight-bold">1000</p>
                            </div>
                        </div>
                        <div className="card bg-transparent border-0 text-center align-items-center col-3 p-0">
                            <img className="card-img-top" src="./assets/images/icon_mess.png" alt="" />
                            <div className="card-body px-0 pb-0">
                                <h5>Tin nhắn</h5>
                                <p className="font-weight-bold">1000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Statiscial;