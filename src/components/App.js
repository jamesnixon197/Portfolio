import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import MainContent from './MainContent';
import '../assets/scss/App.scss';

export default class App extends Component {
    render() {
        return (
            <div id="container">
                <NavigationBar />
                <MainContent />
            </div>
        );
    }
}