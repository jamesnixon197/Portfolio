import React, { Component } from 'react'
import MainHero from './MainHero';
import '../assets/scss/App.scss'

export default class App extends Component {
    render() {
        return (
            <div>
                <MainHero />
            </div>
        );
    }
}