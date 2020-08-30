import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import FirstSection from './sections/FirstSection';
import SecondSection from './sections/SecondSection';
import '../assets/scss/App.scss';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <NavigationBar />
                <div id="content">
                    <FirstSection />
                    <SecondSection />
                </div>
            </div>
        );
    }
}