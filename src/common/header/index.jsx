import React, { useState, useEffect } from 'react'
import './header.scss'
import logo from '../../assets/logo/logoDark.jpeg'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    const [scrollDirection, setScrollDirection] = useState("up");
    const [prevScrollY, setPrevScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < prevScrollY) {
                setScrollDirection("up");
            } else if (currentScrollY > 25 && currentScrollY > prevScrollY) {
                setScrollDirection("down");
            }

            setPrevScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollY]);

    return (
        <header className={scrollDirection === "down" ? "hidden" : ""}>
            <div className='header-content'>
                <Link to="/" className='header-logo'>
                    <img src={logo} alt='logo' />
                </Link>
                <nav className='header-actions'>
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/property">Property</NavLink>
                    <NavLink to="/service">Service</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header
