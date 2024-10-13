import React from 'react'
import './header.scss'
import logo from '../../assets/logo/logoDark.jpeg'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    return (
        <header>
            <div className='header-content'>
                <Link to="/" className='header-logo'>
                    <img src={logo} alt='logo' />
                </Link>
                <nav className='header-actions'>
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/property">Property</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/service">Service</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header
