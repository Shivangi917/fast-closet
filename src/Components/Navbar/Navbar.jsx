import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        // Handle the search logic here
        console.log('Search query:', searchQuery);
    };

    return (
        <nav style={{ backgroundColor: '#F9F5F1' }} className="shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Brand Name */}
                    <div className="flex items-center">
                        <Link to="/" className="text-gray-900 font-semibold text-2xl tracking-wide">
                            Fast Closet
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="flex space-x-8 items-center">
                        <Link
                            to="/"
                            className="text-gray-900 hover:bg-gray-200 hover:text-gray-900 px-4 py-2 rounded-md text-md font-medium transition-colors duration-300"
                        >
                            Home
                        </Link>

                        {/* Categories Dropdown */}
                        <div className="relative group">
                            <button className="text-gray-900 hover:bg-gray-200 hover:text-gray-900 px-4 py-2 rounded-md text-md font-medium transition-colors duration-300">
                                Categories
                            </button>
                            <div className="absolute hidden group-hover:block bg-white shadow-md text-gray-900 rounded-md mt-2 py-2">
                                <Link
                                    to="/categories/men"
                                    className="block px-4 py-2 hover:bg-gray-200 transition-colors duration-300"
                                >
                                    Men
                                </Link>
                                <Link
                                    to="/categories/women"
                                    className="block px-4 py-2 hover:bg-gray-200 transition-colors duration-300"
                                >
                                    Women
                                </Link>
                                <Link
                                    to="/categories/kids"
                                    className="block px-4 py-2 hover:bg-gray-200 transition-colors duration-300"
                                >
                                    Kids
                                </Link>
                            </div>
                        </div>

                        {/* Search Bar */}
                        <form onSubmit={handleSearch} className="relative flex items-center">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search for products"
                                className="w-72 px-4 py-2 rounded-l-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all"
                            />
                            <button
                                type="submit"
                                className="px-5 py-2 bg-gray-900 text-white rounded-r-md hover:bg-gray-700 transition-colors duration-300"
                            >
                                Search
                            </button>
                        </form>

                        {/* Login Button */}
                        <Link
                            to="/login"
                            className="text-gray-900 hover:bg-gray-200 hover:text-gray-900 px-4 py-2 rounded-md text-md font-medium transition-colors duration-300"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
