import React, { Component } from 'react';
import MainContentText from './MainContentText';
import Footer from './Footer';

import '../assets/scss/MainContent.scss';

export default class MainContent extends Component {
    render() {
        return (
            <div id="mainContent">
                <MainContentText />
                <hr id="seperator"/>
                <Footer />
            </div>
        );
    }
}