                
import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Importing icons from react-icons
import { Link } from 'react-router-dom'; // Import Link component for navigation

export default function Header({ toggleDarkMode, isDarkMode }) {
  return (
    <nav className="bg-indigo-500 z-[20] shadow-md dark:bg-gray-800 py-2 px-4 flex justify-between items-center sticky top-0 transition duration-300">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-white">webdcs</h1>

      {/* Navigation Links and Dark Mode Toggle */}
      <div className="flex gap-4 items-center">
        {/* Navigation Links */}
        <ul className="md:flex gap-4 hidden">
          <li className="cursor-pointer text-yellow-400 hover:text-white font-semibold dark:text-yellow-300 dark:hover:text-gray-200">
            <Link to="/home">Home</Link>
          </li>
          <li className="cursor-pointer text-yellow-400 hover:text-white font-semibold dark:text-yellow-300 dark:hover:text-gray-200">
            <Link to="/about">About</Link>
          </li>
          <li className="cursor-pointer text-yellow-400 hover:text-white font-semibold dark:text-yellow-300 dark:hover:text-gray-200">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-full transition duration-300"
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? (
            <FaSun className="text-yellow-500" size={20} /> // Sun icon for light mode
          ) : (
            <FaMoon className="text-gray-800 dark:text-yellow-300" size={20} /> // Moon icon for dark mode
          )}
        </button>
      </div>
    </nav>
  );
}
