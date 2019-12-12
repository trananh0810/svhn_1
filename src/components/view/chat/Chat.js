import React, { Component } from 'react';

import ModalOption from './ModalOption';
import MessItem from './MessItem';
import Typing from './Typing';
import InputMess from './InputMess';
import Function from './Function';
// import '../../../assets/css/chat.css';
import '../../../assets/js/chat.js';

let contextPath = window.location.origin;

class Chat extends Component {
    messageMock = {
        contentType: 1,
        content: "Nội dung tin nhắn",
        status: 1,
        createdDate: '22/12/2019',
    }

    messageMock2 = {
        contentType: 2,
        content: "https://firebasestorage.googleapis.com/v0/b/demoreactfirebase-b621d.appspot.com/o/002%20Night%20Fade%20-%20%23a18cd1%E2%86%92%23fbc2eb.png?alt=media&token=a9b453ff-1985-42e6-baa2-40912b0b56b0",
        status: 1,
        createdDate: '22/12/2019',
    }

    messageMock3 = {
        contentType: 3,
        content: "https://firebasestorage.googleapis.com/v0/b/demoreactfirebase-b621d.appspot.com/o/1.mp4?alt=media&token=067e2cde-7249-4a1d-ba94-7a6194f19ddc",
        status: 1,
        createdDate: '22/12/2019',
    }

    render() {
        return (
            <React.Fragment>
                <link rel="stylesheet" type="text/css" href={`${contextPath}/assets/css/chat.css`} />
                
                <ModalOption />

                {/* Content */}
                <section id="sec-content">

                    <div className="container bg-light">
                        {/* div mess */}
                        <div id="div-mess">
                            {/* list mess */}
                            <div id="div-list-mess" className="row">
                                <div className="container d-flex flex-column justify-content-end">
                                    <div className="row">
                                        <div className="col-12">
                                            <p className="p-sayhello w-100 text-center">Hãy gửi tin nhắn đến bạn chat của mình!!!</p>
                                        </div>
                                    </div>
                                    
                                    <MessItem position="left" message={this.messageMock}/>
                                    <MessItem position="right" message={this.messageMock2}/>
                                    <MessItem position="right" message={this.messageMock2}/>
                                    <MessItem position="left" message={this.messageMock3}/>
                                    
                                    <Typing/>
                                </div>
                            </div>
                            {/* end list mess */}
                            
                            <InputMess/>
                            
                            <Function/>
                        </div>
                        {/* end div mess */}
                    </div>

                    <style dangerouslySetInnerHTML={{__html: "\n        #sec-footer{\n            display: none;\n        }\n    " }} />
                </section>
                {/* End Content */}

                {/* <script src="./assets/js/chat.js"></script> */}
            </React.Fragment>
        );
    }
}

export default Chat;