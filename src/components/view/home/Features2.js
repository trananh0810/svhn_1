import React, { Component } from 'react';

class Features2 extends Component {
    render() {
        return (
            <section id="sec-features-detail">
                <div className="container bg-light py-5">
                    <div className="row">
                        <div className="col-md-5 d-flex flex-column justify-content-center">
                            <div>
                                <img src="./assets/images/iphone.jpg" className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="card bg-transparent border-0" style={{}}>
                                <div className="row no-gutters">
                                    <div className="col-3 d-flex flex-column align-items-center justify-content-center">
                                        <img src="./assets/images/icon_random.png" className="w-50" alt="..." />
                                    </div>
                                    <div className="col-9">
                                        <div className="card-body">
                                            <h5 className="card-title font-weight-bold">Ngẫu nhiên</h5>
                                            <p className="card-text text-justify">Khi bắt cặp trò chuyện, bạn sẽ được ghép ngẫu
                                              nhiên với một
                        bạn chat khác.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card bg-transparent border-0" style={{}}>
                                <div className="row no-gutters">
                                    <div className="col-3 d-flex flex-column align-items-center justify-content-center">
                                        <img src="./assets/images/icon_gender.png" className="w-50" alt="..." />
                                    </div>
                                    <div className="col-9">
                                        <div className="card-body">
                                            <h5 className="card-title font-weight-bold">Giới tính</h5>
                                            <p className="card-text text-justify">Svhn.fun cho phép bạn chọn giới tính của mình và
                                              giới tính muốn
                        trò chuyện. Từ đó bạn sẽ được ghép cặp theo giới tính mong muốn.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card bg-transparent border-0" style={{}}>
                                <div className="row no-gutters">
                                    <div className="col-3 d-flex flex-column align-items-center justify-content-center">
                                        <img src="./assets/images/icon_culture.png" className="w-50" alt="..." />
                                    </div>
                                    <div className="col-9">
                                        <div className="card-body">
                                            <h5 className="card-title font-weight-bold">Văn hóa</h5>
                                            <p className="card-text text-justify">Chúng tôi sẽ chặn những tin nhắn có nội dung kém
                                              văn hóa.
                                              Đồng thời, bạn cũng có thể đề xuất những từ, cụm từ kém văn hóa mà chúng tôi
                        chưa chặn.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Features2;