import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import '../App.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarAnimation = useSpring({
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: isScrolled ? 'blur(20px)' : 'blur(10px)',
    });

    return (
        <animated.div style={navbarAnimation} className={`navbar z-[999] p-0 m-0 ${isScrolled ? 'scrolled fixed top-0 left-0 right-0' : ''}`}>
            <div className="bg-black bg-opacity-10 flex items-stretch justify-between px-9 py-8 md:px-5">
                <img
                    loading="lazy"
                    srcSet="..."
                    className="aspect-square object-contain object-center w-[58px] overflow-hidden shrink-0 max-w-full"
                    alt="Logo"
                />
                <span className="flex items-start justify-between gap-5 mt-1.5 self-start max-md:max-w-full max-md:flex-wrap">
                    <div className="text-black text-base self-center whitespace-nowrap my-auto">
                      <Link to="/"> HOME </Link>
                    </div>
                    <div className="text-black text-base self-center my-auto">
                      <Link to="about"> ABOUT US </Link>
                    </div>
                    <div className="text-black text-base self-center my-auto">
                      <Link to="services"> SERVICE </Link>
                    </div>
                    <div className="text-black text-base self-center my-auto">
                      <Link to="team"> TEAM </Link>
                    </div>
                    <span className="text-white text-base whitespace-nowrap bg-blue-600 self-stretch grow justify-center items-stretch px-8 py-5 rounded-[30px] max-md:px-5">
                        GET STARTED
                    </span>
                </span>
            </div>
        </animated.div>
    );
};
export default Navbar;