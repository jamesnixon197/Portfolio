import React, { Component } from 'react';
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
                        <a href="#" className="button">Curriculm Vitae</a>
                        <a href="#" className="button">Contact Me</a>
                    </nav>
                </div>
            </div>
        );
    }
}
