import React, { Component } from 'react';

class PostItem extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <p className="font-weight-bold mb-1">#123456789</p>
                    <h5 className="card-title">Gửi: Bạn abcxyz</h5>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Explicabo
                      accusamus, dolor sit error dolorem quo, itaque officiis maiores fugit delectus harum
            accusantium quisquam tempora eos sed eius tenetur dolorum est!</p>
                    <small className="text-muted">22/12/2019 14:53</small>
                    <div>
                        <div className="btn btn-outline-info btn-custom mt-2" data-toggle="modal" data-target="#modal-post-detail">
                            Chi tiết
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostItem;