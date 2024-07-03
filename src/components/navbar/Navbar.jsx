import React, { useState, useEffect  } from 'react';
import PropTypes from 'prop-types';
import "./css/Navbar.css";

export function Navbar({ brand, links }) {
    const [active, setActive] = useState('nav__menu');
    const [toggleIcon, setToggleIcon] = useState('nav__toggler');
    const [activeLink, setActiveLink] = useState(null);

    const navToggle = () => {
        setActive(prev => prev === 'nav__menu' ? 'nav__menu nav__active' : 'nav__menu');
        setToggleIcon(prev => prev === 'nav__toggler' ? 'nav__toggler toggle' : 'nav__toggler');
    };

    const handleResize = () => {
        if (window.innerWidth > 768) {
            setActive('nav__menu');
            setToggleIcon('nav__toggler');
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleLinkClick = (event, index, href) => {
        event.preventDefault();
        setActiveLink(index); 

        if (href === "#home") {
            window.scrollTo(0, 0);  
            setTimeout(() => {
                window.location.href = window.location.href.split('#')[0];  
            }, 100);  
        } else {
            const section = document.querySelector(href);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth',  block: 'start' });
            }
        }

        if (window.innerWidth <= 768) {
            setActive('nav__menu'); 
            setToggleIcon('nav__toggler'); 
        }
    };

    const handleBrandClick = (event) => {
        event.preventDefault();
        window.scrollTo(0, 0);  
        setTimeout(() => {
            window.location.href = window.location.href.split('#')[0];  
        }, 100); 
    };

    return (
        <nav className='container-navbar'>
            <div className='nav'>
                <div className='nav__brand'>
                    <a href='#' onClick={handleBrandClick}>
                        <img src='/imgs/corona-pink.svg' alt={brand} className='nav__brand-image' />
                    </a>
                </div>
                <ul className={active}>
                    {links.map((link, index) => (
                        <li key={index} className='nav__item'>
                            <a
                                href={link.href}
                                className={`nav__link ${activeLink === index ? 'active' : ''}`}
                                onClick={(e) => handleLinkClick(e,index, link.href)}
                            >
                                {link.text}
                            </a>
                        </li>
                    ))}            
                </ul>
                <div onClick={navToggle} className={toggleIcon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </div>            
        </nav>
    );
}

Navbar.propTypes = {
    brand: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired
    })).isRequired
};
