import React, { useState, useEffect } from 'react';
import { NavLink } from '../types';
import MenuIcon from './icons/MenuIcon';
import XIcon from './icons/XIcon';
import SunIcon from './icons/SunIcon';
import MoonIcon from './icons/MoonIcon';
import { Theme } from '../App'; 

interface NavbarProps {
  navLinks: NavLink[];
  myName: string;
  currentTheme: Theme;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ navLinks, myName, currentTheme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); 
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on mount to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  }

  const nameParts = myName.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b 
                  ${isScrolled 
                    ? 'bg-code-bg-secondary/80 dark:bg-dark-code-bg-secondary/80 backdrop-blur-sm shadow-code-subtle dark:shadow-dark-code-subtle border-code-border dark:border-dark-code-border' 
                    : 'bg-transparent border-transparent shadow-none'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"> {/* Changed max-w-5xl to max-w-7xl */}
        <div className="flex items-center justify-between h-14 md:h-16"> {/* Reduced height */}
          <a href="#home" className="text-xl font-medium transition-colors" onClick={closeMenu}>
            <span className="text-code-accent-keyword dark:text-dark-code-accent-keyword hover:opacity-80">{firstName}</span>
            <span className="text-code-accent-keyword dark:text-dark-code-accent-keyword animate-cursor-blink">_</span>
            {lastName && <span className="text-code-text-primary dark:text-dark-code-text-primary ml-1">{lastName}</span>}
            <span className="text-code-text-primary dark:text-dark-code-text-primary">.</span>
          </a>
          
          <div className="flex items-center space-x-3">
            <nav className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="text-sm text-code-text-secondary dark:text-dark-code-text-secondary hover:text-code-accent-keyword dark:hover:text-dark-code-accent-keyword transition-colors"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button
              onClick={toggleTheme}
              aria-label={currentTheme === 'light' ? "Switch to dark theme" : "Switch to light theme"}
              className="p-1.5 rounded-sm text-code-text-secondary dark:text-dark-code-text-secondary hover:text-code-accent-keyword dark:hover:text-dark-code-accent-keyword hover:bg-code-accent-keyword/10 dark:hover:bg-dark-code-accent-keyword/10 transition-colors"
            >
              {currentTheme === 'light' ? <MoonIcon className="h-4 w-4" /> : <SunIcon className="h-4 w-4" />}
            </button>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                aria-label="Toggle menu"
                className="text-code-text-primary dark:text-dark-code-text-primary hover:text-code-accent-keyword dark:hover:text-dark-code-accent-keyword focus:outline-none p-1.5"
              >
                {isOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-code-bg-secondary dark:bg-dark-code-bg-secondary shadow-code-subtle dark:shadow-dark-code-subtle border-b border-x border-code-border dark:border-dark-code-border py-2">
          <nav className="flex flex-col items-center space-y-1 px-2">
            {navLinks.map((link, index) => (
              <a
                key={link.id}
                href={link.href}
                className="block w-full text-center py-1.5 text-sm text-code-text-primary dark:text-dark-code-text-primary hover:text-code-accent-keyword dark:hover:text-dark-code-accent-keyword hover:bg-code-accent-keyword/10 dark:hover:bg-dark-code-accent-keyword/10 rounded-sm transition-colors animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;