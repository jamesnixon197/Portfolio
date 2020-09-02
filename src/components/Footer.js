import React, { Component } from 'react';

import FooterIcon from './FooterIcon';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

import '../assets/scss/Footer.scss';

export default class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <FooterIcon
                    url="https://github.com/jamesnixon197"
                    icon={<GitHubIcon />}
                />
                <FooterIcon
                    url="https://www.linkedin.com/in/james-nixon-517a7b12a/"
                    icon={<LinkedInIcon />}
                />
                {/* <FooterIcon url="https://github.com" icon={<TwitterIcon />} /> */}
            </div>
        );
    }
}
    