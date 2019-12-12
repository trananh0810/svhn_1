import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <section id="sec-header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <nav className="navbar navbar-expand-sm navbar-dark p-0 justify-content-between">
                                <NavLink className="navbar-brand m-0" to="/">
                                    <img src="../assets/images/logo_svhn.png" id="img-header-logo" alt="" />
                                </NavLink>
                                <div className="dropdown open dropleft">
                                    <button className="btn btn-link" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="text-white">Nguyễn Văn A</span>
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="triggerId">
                                        {/* <button class="dropdown-item" href="#">Action</button> */}
                                        <button className="dropdown-item" data-toggle="modal" data-target="#modalChangePassword">Đổi
                      mật khẩu</button>
                                        <button className="dropdown-item">Đăng xuất</button>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Header;