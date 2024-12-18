// Footer.jsx
import React from "react";
import { Link } from 'react-router-dom'; // Import Link component for navigation
function Footer() {
  return (
    <div className="bg-orange-600 w-full text-white py-6">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Logo and Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 text-white">
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <img src="/logo.png" alt="Logo" className="w-12 h-12 rounded-full" />
            <span className="text-3xl font-bold text-white">Your Brand</span>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a
              href="acc.com"
              className="text-white hover:text-blue-400 transition-all duration-300 ease-in-out"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="abbc.com"
              className="text-white hover:text-blue-400 transition-all duration-300 ease-in-out"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="acv.com"
              className="text-white hover:text-blue-400 transition-all duration-300 ease-in-out"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Section 1 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-white">
              We specialize in cutting-edge technologies like Artificial Intelligence and Machine Learning to help businesses grow.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
              <Link to="/home">Home</Link>
              </li>
              <li>
              <Link to="/about">About</Link>
              </li>
              <li>
              <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-white">Email: sachin.gla_csd21@gla.ac.in</p>
            <p className="text-white">Phone: +91 9528060126</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center">
        <p className="text-white text-sm">
          &copy; 2024 Your Brand. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
