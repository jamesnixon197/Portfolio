import React, { Component } from 'react';
import '../assets/scss/MainContent.scss';

export default class MainContent extends Component {
    render() {
        return (
            <div id="mainContent">
                <div id="mainContentText" className="center lighterText">
                    My name is{' '}
                    <strong>James Nixon</strong><br />
                    I am a{' '}
                    <strong>Software Engineer</strong><br />
                    Based in{' '}
                    <strong>Manchester</strong>
                </div>
            </div>
        );
    }
}