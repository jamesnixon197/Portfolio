import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import '../assets/scss/App.scss';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <NavigationBar />
            </div>
        );
    }
}