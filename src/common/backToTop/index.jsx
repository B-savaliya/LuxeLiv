import React, { useEffect, useState } from 'react';
import './backtotop.scss';
import { IconContext } from 'react-icons';
import { RxDoubleArrowUp } from 'react-icons/rx';
function BackToTop() {
    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 4) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <>
            <IconContext.Provider
                value={{ color: 'var(--theme-backtotop-color)', size: '36px' }}
            >
            <button
                className={`backtotop ${showButton ? 'show' : ''}`}
                onClick={scrollToTop}
            >
                <RxDoubleArrowUp />
            </button>
        </IconContext.Provider >
        </>
    );
}
export default BackToTop;
