import React from 'react';
import { AiOutlineSearch, AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-400 to-gray-200 p-4">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        {/* Logo and Name */}
        <div className="text-black text-2xl font-bold mb-4 sm:mb-0">
          Fast Closet
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-1/3 mb-4 sm:mb-0">
          <input
            type="text"
            className="w-full p-2 pl-4 rounded-full border-none focus:outline-none shadow-md"
            placeholder="Find the best"
          />
          <button className="absolute right-0 top-0 h-full px-4 text-white bg-gray-600 rounded-r-full shadow-md hover:bg-gray-500">
            <AiOutlineSearch />
          </button>
        </div>

        {/* User Actions */}
        <div className="flex space-x-6 text-black text-lg items-center">
          <Link to="/account" className="flex items-center cursor-pointer hover:text-gray-500 transition-colors">
            <AiOutlineUser className="mr-1" /> Account
          </Link>
          <Link to="/favorites" className="flex items-center cursor-pointer hover:text-gray-500 transition-colors">
            <AiOutlineHeart className="mr-1" /> Favorites
          </Link>
          <Link to="/cart" className="flex items-center cursor-pointer hover:text-gray-500 transition-colors">
            <AiOutlineShoppingCart className="mr-1" /> Cart
          </Link>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto mt-4 flex justify-center flex-wrap space-x-8 text-black text-lg">
        <Link to="/men" className="hover:text-gray-500 cursor-pointer transition-colors">Men</Link>
        <Link to="/women" className="hover:text-gray-500 cursor-pointer transition-colors">Women</Link>
        <Link to="/kids" className="hover:text-gray-500 cursor-pointer transition-colors">Kids</Link>
        <Link to="/bags" className="hover:text-gray-500 cursor-pointer transition-colors">Bags</Link>
        <Link to="/footwear" className="hover:text-gray-500 cursor-pointer transition-colors">Footwear</Link>
        <Link to="/casuals" className="hover:text-gray-500 cursor-pointer transition-colors">Casuals</Link>
      </div>
    </nav>
  );
};

export default Navbar;
