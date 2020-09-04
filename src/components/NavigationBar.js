import React, { Component } from 'react';

import CV from '../assets/pdf/james-cv.pdf';
import '../assets/scss/NavigationBar.scss';

export default class NavigationBar extends Component {
    render() {
        return (
            <div id="navigationBar">
                <div id="navigationBarContainer" className="center">
                    <div id="logo">
                        N<span className="darkBlue">1</span>XON
                        <span className="lighterText">.dev</span>
                    </div>
                    <nav className="lighterText">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={CV}
                            className="button"
                        >
                            Curriculm Vitae
                        </a>
                        <a href="mailto:jamesnixon197@gmail.com" className="button">
                            Contact Me
                        </a>
                    </nav>
                </div>
            </div>
        );
    }
}
