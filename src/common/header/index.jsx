import React from 'react'
import './header.scss'
import logo from '../../assets/logo/tempLogoDarkImg.png'

function Header() {
    return (
        <header>
            <div className='header-content'>
                <a className='header-logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='header-actions'>
                    <a>Home</a>
                    <a>Property</a>
                    <a>Pages</a>
                    <a>Blog</a>
                    <a>Contact</a>
                </div>
            </div>
        </header >
    )
}

export default Header