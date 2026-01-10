import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram } from 'lucide-react';
import { VENUE_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Food & Drink', href: '#food' },
    { name: 'Location', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 shadow-lg backdrop-blur-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-display font-bold text-2xl tracking-wider text-white">
              SILVERADOS <span className="text-yellow-500">WNC</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-8 mr-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium uppercase tracking-wide transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            {/* Social Icons Divider */}
            <div className="flex items-center space-x-4 border-l border-slate-700 pl-8">
              <a 
                href={VENUE_INFO.social.facebook} 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-400 hover:text-[#1877F2] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href={VENUE_INFO.social.instagram} 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-400 hover:text-[#E4405F] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 absolute w-full border-b border-slate-700 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-yellow-400 block px-3 py-4 text-base font-medium text-center border-b border-slate-700 last:border-0"
              >
                {link.name}
              </a>
            ))}
          </div>
          {/* Mobile Social Links */}
          <div className="flex justify-center space-x-8 py-6 bg-slate-900/50 border-t border-slate-700">
            <a 
              href={VENUE_INFO.social.facebook} 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-400 hover:text-[#1877F2] transition-colors flex items-center gap-2"
            >
              <Facebook className="w-6 h-6" />
              <span className="text-sm font-medium">Facebook</span>
            </a>
            <a 
              href={VENUE_INFO.social.instagram} 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-400 hover:text-[#E4405F] transition-colors flex items-center gap-2"
            >
              <Instagram className="w-6 h-6" />
              <span className="text-sm font-medium">Instagram</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;