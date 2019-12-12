import React, { Component } from 'react';
import Slide from './Slide';
import Featutes from './Featutes';
import SocialPerspective from './SocialPerspective';
import Features2 from './Features2';
import Statiscial from './Statiscial';
import LikeFacebook from './LikeFacebook';
// import '../../../assets/css/index.css';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <link rel="stylesheet" type="text/css" href="./assets/css/index.css" />

                <Slide/>

                <Featutes/>

                <SocialPerspective/>

                <Features2/>

                <Statiscial/>

                <LikeFacebook/>
            </React.Fragment>
        );
    }
}

export default Home;