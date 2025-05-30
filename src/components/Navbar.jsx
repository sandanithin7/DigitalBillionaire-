import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '/images/4.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isPackageActive = () => {
    return location.pathname.startsWith('/packages/');
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/courses', label: 'Courses' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  // Add Dashboard link if user is logged in
  if (user) {
    navLinks.push({ path: '/dashboard', label: 'Dashboard' });
  }
  
  const packageLinks = [
    { path: '/packages/pro', label: 'Pro Package' },
    { path: '/packages/supreme', label: 'Supreme Package' },
    { path: '/packages/premium', label: 'Premium Package' },
    { path: '/packages/premium-plus', label: 'Premium Plus Package' }
  ];

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gradient-to-r from-black/95 via-gray-700/95 to-purple-800/95 backdrop-blur-md shadow-xl border-b-2 border-purple-500/30' 
        : 'bg-gradient-to-r from-black/90 via-gray-700/90 to-purple-800/90 backdrop-blur-sm border-b-2 border-purple-500/20'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          {/* Logo with enhanced styling */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src={logo}
              alt="EduNexx Logo"
              className="h-14 transform group-hover:scale-105 transition-transform duration-300"
            />
            <span className="text-3xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:via-purple-500 group-hover:to-pink-500 transition-all duration-300">
              EduNexx
            </span>
          </Link>

          {/* Desktop Navigation with enhanced styling */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-semibold transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-white bg-purple-800/40 px-5 py-3 rounded-xl shadow-lg shadow-purple-500/20'
                    : 'text-gray-200 hover:text-white hover:bg-purple-800/30 px-5 py-3 rounded-xl hover:shadow-lg hover:shadow-purple-500/10'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Packages Dropdown with enhanced styling */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center text-base font-semibold transition-all duration-300 ${
                  isPackageActive()
                    ? 'text-white bg-purple-800/40 px-5 py-3 rounded-xl shadow-lg shadow-purple-500/20'
                    : 'text-gray-200 hover:text-white hover:bg-purple-800/30 px-5 py-3 rounded-xl hover:shadow-lg hover:shadow-purple-500/10'
                }`}
              >
                Packages
                <svg
                  className={`ml-2 h-5 w-5 transition-transform duration-300 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-3 w-56 bg-gradient-to-br from-black/95 via-gray-800/95 to-purple-900/95 backdrop-blur-md rounded-xl shadow-2xl py-3 z-50 border-2 border-purple-500/30">
                  {packageLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block px-5 py-3 text-base font-medium transition-all duration-300 ${
                        isActive(link.path)
                          ? 'text-white bg-purple-800/50'
                          : 'text-gray-200 hover:text-white hover:bg-purple-800/40'
                      }`}
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Login/Signup or User Menu with enhanced styling */}
            {user ? (
              <div className="flex items-center space-x-4">
                <button
                  onClick={logout}
                  className="text-base font-semibold text-gray-200 hover:text-white bg-purple-800/40 hover:bg-purple-800/50 px-5 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-base font-semibold text-gray-200 hover:text-white bg-purple-800/40 hover:bg-purple-800/50 px-5 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 border-2 border-purple-500/30"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button with enhanced styling */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-200 hover:text-white focus:outline-none transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu with enhanced styling */}
        {isMenuOpen && (
          <div className="md:hidden bg-gradient-to-br from-black/95 via-gray-800/95 to-purple-900/95 backdrop-blur-md shadow-2xl rounded-xl mt-3 py-4 absolute w-full left-0 border-2 border-purple-500/30">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-5 py-3 text-base font-semibold transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-white bg-purple-800/50'
                    : 'text-gray-200 hover:text-white hover:bg-purple-800/40'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Packages Dropdown with enhanced styling */}
            <div className="px-5 py-3">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center justify-between w-full text-base font-semibold transition-all duration-300 ${
                  isPackageActive()
                    ? 'text-white bg-purple-800/50'
                    : 'text-gray-200 hover:text-white hover:bg-purple-800/40'
                }`}
              >
                Packages
                <svg
                  className={`h-5 w-5 transition-transform duration-300 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="mt-3 space-y-2">
                  {packageLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block px-5 py-3 text-base rounded-xl transition-all duration-300 ${
                        isActive(link.path)
                          ? 'text-white bg-purple-800/50'
                          : 'text-gray-200 hover:text-white hover:bg-purple-800/40'
                      }`}
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Login/Signup or User Menu with enhanced styling */}
            {user ? (
              <div className="px-5 py-3 space-y-3">
                <button
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-center text-base font-semibold text-gray-200 hover:text-white bg-purple-800/40 hover:bg-purple-800/50 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="px-5 py-3 space-y-3">
                <Link
                  to="/login"
                  className="block w-full text-center text-base font-semibold text-gray-200 hover:text-white bg-purple-800/40 hover:bg-purple-800/50 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block w-full text-center text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 border-2 border-purple-500/30"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;