import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <section id="sec-footer">
                <div className="container">
                    <div className="row h-100">
                        <div className="col-12 h-100 d-flex flex-column justify-content-center align-items-center">
                            <p className="text-white m-0"  data-toggle="modal" data-target="#modalLogin">© SVHN v1.0</p>
                            {/* <div className="dropdown open">
                                <button className="btn btn-link" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="text-white">Nguyễn Văn A</span>
                                </button>
                                <div className="dropdown-menu" aria-labelledby="triggerId">
                                    <button className="dropdown-item" data-toggle="modal" data-target="#modalChangePassword">Đổi mật khẩu</button>
                                    <button className="dropdown-item">Đăng xuất</button>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Footer;