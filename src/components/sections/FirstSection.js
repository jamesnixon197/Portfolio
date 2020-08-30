import React, { Component } from 'react';
import '../../assets/scss/sections/FirstSection.scss';

export default class FirstSection extends Component {
    render() {
        return (
            <div id="firstSection" className="heroSection">
                <div id="firstSectionText" className="lighterText center">
                    My name is <strong className="darkBlue">James Nixon</strong>
                    <br />
                    <br />I am a{' '}
                    <strong className="darkBlue">Software Engineer</strong> based in{' '}
                    <strong className="darkBlue">Manchester</strong>
                </div>
            </div>
        );
    }
}
