import React, { Component } from 'react';

class Slide extends Component {
    render() {
        return (
            <section id="sec-slide">
                <div className="container">
                    <div className="row">
                        {/* <div class="col-12"> */}
                        <div id="carouselId" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselId" data-slide-to={0} className="active" />
                                <li data-target="#carouselId" data-slide-to={1} />
                            </ol>
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item active" data-interval={10000}>
                                    <img src="./assets/images/bgr2.png" className="img-slide img-fluid" alt="First slide" />
                                </div>
                                <div className="carousel-item" data-interval={10000}>
                                    <img src="./assets/images/bgr1.jpg" className="img-slide img-fluid" alt="Second slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </section>
        );
    }
}

export default Slide;