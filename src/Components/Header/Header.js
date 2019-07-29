import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div id='head-wrapper'>
            <div className='width'>
                <div id='logo'>M</div>
            </div>
            <div className='greeting width'>I'm a Jr. Full-Stack JavaScript Web Developer based in Indianapolis, IN.</div>
        </div>
    )
}

export default Header;