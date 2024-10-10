import React from 'react'
import './header.scss'
import logo from '../../assets/logo/logoDark.jpeg'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <div className='header-content'>
                <Link to="/" className='header-logo'>
                    <img src={logo} alt='logo' />
                </Link>
                <div className='header-actions'>
                    <Link to="/">Home</Link>
                    <Link to="/property">Property</Link>
                    <Link to="/pages">Pages</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </header >
    )
}

export default Header