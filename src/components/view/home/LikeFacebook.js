import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

class LikeFacebook extends Component {
    render() {
        return (
            <section id="sec-like-fb">
                <div className="container py-md-0 py-3 text-center bg-light">
                    <div className="row">
                        <div className="col-12">
                            <div className="div-like-fb d-flex flex-column align-items-center">
                                <a href="https://www.facebook.com/trananh81095" target="blank">
                                    <FontAwesomeIcon icon={faFacebookSquare} style={{ color: '#1877F2', fontSize: '2.5rem' }} />
                                    {/* <i className="fab fa-facebook-square" style={{ color: '#1877F2', fontSize: '2.5rem' }} /> <br /> */}
                                </a>
                                <iframe title="iframe title" src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fphutungotokparts&width=68&layout=box_count&action=like&size=small&show_faces=false&share=true&height=65&appId=697381697429934" width={68} height={65} style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder={0} allowtransparency="true" allow="encrypted-media" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default LikeFacebook;