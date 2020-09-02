import React, { Component } from 'react';

export default class FooterIcon extends Component {
    render() {
        return (
            <div id="footerIcon">
                <a target="_blank" rel="noreferrer" href={this.props.url}>
                    {this.props.icon}
                </a>
            </div>
        );
    }
}
