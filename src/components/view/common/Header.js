import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

let contentPath = window.location.origin;

class Header extends Component {

    render() {
        return (
            <React.Fragment>
                <style dangerouslySetInnerHTML={{ __html: "\n    .activeMenu{\n        color:white!important\n    }\n" }} />
                <section id="sec-header" className="position-fixed w-100">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <nav className="navbar navbar-expand-sm navbar-dark p-0">
                                                <NavLink className="navbar-brand" to="/">
                                                    <img src={`${contentPath}/assets/images/logo_svhn.png`} id="img-header-logo" alt="" />
                                                </NavLink>
                                                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                                                    <span className="navbar-toggler-icon" />
                                                </button>
                                                <div className="collapse navbar-collapse" id="collapsibleNavId">
                                                    <ul className="navbar-nav m-auto mt-2 mt-lg-0">
                                                        <li className="nav-item">
                                                            <NavLink className="nav-link" activeClassName="activeMenu" to="/">Trang chủ</NavLink>
                                                        </li>
                                                        <li className="nav-item">
                                                            <NavLink className="nav-link" activeClassName="activeMenu" to="tro-chuyen">Trò chuyện</NavLink>
                                                        </li>
                                                        <li className="nav-item">
                                                            <NavLink className="nav-link" activeClassName="activeMenu" to="tim-nguoi">Tìm người</NavLink>
                                                        </li>
                                                        <li className="nav-item">
                                                            <NavLink className="nav-link" activeClassName="activeMenu" to="phan-hoi">Phản hồi</NavLink>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Header;