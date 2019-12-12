import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
// import '../../../assets/css/feedback.css';

let contextPath = window.location.origin;

class Feedback extends Component {
  render() {
    return (
      <React.Fragment>
        <link rel="stylesheet" type="text/css" href={`${contextPath}/assets/css/feedback.css`} />

        <section id="sec-content-feedback">
          <div className="container bg-light py-3">
            <div className="row">
              <div className="col-md-6 col-12 text-center d-flex flex-column justify-content-center">
                <div>
                  <h3 className="title-1">Phản hồi</h3>
                </div>
                <div>
                  <p className="text-justify">Nếu trong quá trình sử dụng, bạn gặp vấn đề, lỗi hoặc muốn góp ý về
                    trang
                  web. Hãy bấm vào nút dưới đây để gửi phản hồi về chúng tôi.</p>
                </div>
                <div>
                  <div className="btn btn-info btn-custom">
                    <FontAwesomeIcon icon={faFacebookMessenger} className="mr-2" />
                    {/* <i className="fab fa-facebook-messenger" /> */}
                    Phản hồi
                </div>
                </div>
              </div>
              <div className="col-md-6 col-12 text-center pt-3">
                <img src="./assets/images/we-want-your-feedback.jpg" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-6 text-center pb-3">
                <img src="./assets/images/we-want-your-feedback.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-md-6 col-12 text-center d-flex flex-column justify-content-center">
                <div>
                  <h3 className="title-1">Đề xuất</h3>
                </div>
                <div>
                  <p className="text-justify">Nếu có những tin nhắn chứa nội dung kém văn hóa mà chúng tôi chưa chặn,
                    hãy
                  gửi những từ, cụm từ đó về cho chúng tôi.</p>
                </div>
                <form method="submit">
                  <div className="form-group text-left">
                    <label htmlFor="txtWord">Từ, cụm từ đề xuất chặn:</label>
                    <input type="text" className="form-control btn-custom" name="word" id="txtWord" required />
                  </div>
                  <button className="btn btn-info btn-custom" type="submit">Gửi đề xuất</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Feedback;