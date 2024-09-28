import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo or brand name */}
                <Link to="/" className="text-white text-2xl font-bold">Fast Closet</Link>

                {/* Hamburger Icon */}
                <button onClick={toggleMenu} className="text-white md:hidden">
                    {isOpen ? '✖️' : '☰'}
                </button>

                {/* Links for navigation */}
                <div className={`flex-col md:flex md:flex-row md:space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
                    <Link to="/" className="text-white hover:text-gray-400">Home</Link>
                    <Link to="/codes" className="text-white hover:text-gray-400">Codes</Link>
                    <Link to="/discussion" className="text-white hover:text-gray-400">Discussion</Link>
                    <Link to="/about" className="text-white hover:text-gray-400">About</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
