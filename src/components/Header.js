import React from 'react';
import gitHubIcon from './GitHub-Mark-32px.png';

function Header() {
    const headerContainer = {
            width: '100%',
            height: '40px',
            marginBottom: '50px'
        },
        headerIcon = {
            float: 'right',
            padding: '20px'
        };
    return (
        <div style={headerContainer}>
            <a
                style={headerIcon}
                href='https://github.com/oliviaalexander'
                target='_blank'
                rel='noopener noreferrer'>
                <img src={gitHubIcon} alt='Check out my GitHub! ' />
            </a>
        </div>
    );
}

export default Header;
