import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram, Disc } from 'lucide-react';
import { VENUE_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-xl py-3 border-b border-red-600/30' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
             <Disc className={`w-8 h-8 text-red-600 ${scrolled ? 'animate-spin-slow' : 'animate-none'}`} />
             <div className="absolute inset-0 bg-red-600 blur-md opacity-20 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <span className="font-rock text-3xl text-white tracking-widest">SILVERADOS</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-12">
           {['Experience', 'Lineup', 'Contact'].map((item) => (
             <a 
               key={item} 
               href={`#${item.toLowerCase()}`}
               className="font-rock text-xl text-slate-400 hover:text-red-600 tracking-widest transition-colors relative group"
             >
               {item}
               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
             </a>
           ))}
           
           <div className="flex items-center gap-4 pl-8 border-l border-white/10">
              <a href={VENUE_INFO.social.facebook} className="text-slate-500 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href={VENUE_INFO.social.instagram} className="text-slate-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
           </div>

           {/* Equalizer Nav Indicator */}
           <div className="flex items-end gap-1 h-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="eq-bar w-1" style={{ animationDelay: `${i * 0.2}s` }}></div>
              ))}
           </div>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white">
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black z-[90] transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col items-center justify-center gap-12`}>
         {['Experience', 'Lineup', 'Contact'].map((item) => (
             <a 
               key={item} 
               href={`#${item.toLowerCase()}`}
               onClick={() => setIsOpen(false)}
               className="font-rock text-6xl text-white hover:text-red-600 tracking-tighter"
             >
               {item}
             </a>
           ))}
           <button onClick={() => setIsOpen(false)} className="mt-12 p-4 rounded-full border border-white/10 text-red-600">
             <X className="w-8 h-8" />
           </button>
      </div>
    </nav>
  );
};

export default Navbar;