import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faThumbsUp, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

class InputMess extends Component {
    render() {
        return (
            <div id="div-input-mess" className="row">
                <div className="col-12 d-flex flex-row align-items-center justify-content-center">
                    <label className="custom-file" style={{ width: '24px', height: '26px' }}>
                    <FontAwesomeIcon icon={faImage} className="icon active" style={{width: '24px'}} />
                        <input type="file" name="file" id="txtFile" className="custom-file-input" style={{width: 0}} accept="video/*,image/*" />
                    </label>
                    <input type="text" id="input-mess" />
                    <FontAwesomeIcon icon={faThumbsUp} className="icon" />
                    {/* <FontAwesomeIcon icon={faPaperPlane} className="icon"/> */}
                </div>
            </div>
        );
    }
}

export default InputMess;