import React, { Component } from 'react';

class SocialPerspective extends Component {
    render() {
        return (
            <section id="sec-social-perspective">
                <div className="container bg-white py-5">
                    <div className="row">
                        <div className="col-md-6 col-12 text-md-right text-center d-flex flex-column justify-content-center">
                            {/* <div class="h-auto"> */}
                            <div>
                                <h3 className="font-weight-bold">Chat Sinh Viên Hà Nội</h3>
                            </div>
                            <div>
                                <p>Nơi giao lưu, chia sẻ của cộng đồng sinh viên Hà Nội nói riêng và cộng đồng sinh viên Việt
                  Nam nói chung.</p>
                            </div>
                            <div>
                                <div className="btn btn-info btn-custom">Chat ngay</div>
                            </div>
                            {/* <h3 class="font-weight-bold">Chat Sinh Viên Hà Nội</h3>

                    <p>Nơi giao lưu, chia sẻ của cộng đồng sinh viên Hà Nội nói riêng và cộng đồng sinh viên Việt Nam
                        nói chung.</p>

                    <div class="btn btn-info btn-custom">Chat ngay</div> */}
                            {/* </div> */}
                        </div>
                        <div className="col-md-6 col-12">
                            <img src="./assets/images/ipad.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SocialPerspective;