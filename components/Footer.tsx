import React from 'react';
import { VENUE_INFO } from '../constants';
import { MapPin, Phone, Mail, Facebook, Instagram, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold text-white">
              SILVERADOS <span className="text-yellow-500">WNC</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Black Mountain's premier destination for drinks, billiards, and indoor live music. 
            </p>
            <div className="flex space-x-4">
              <a href={VENUE_INFO.social.facebook} className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href={VENUE_INFO.social.instagram} className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                <span>{VENUE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-yellow-500 shrink-0" />
                <span>{VENUE_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-yellow-500 shrink-0" />
                <a href={`mailto:${VENUE_INFO.email}`} className="hover:text-white">{VENUE_INFO.email}</a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-wider">Opening Hours</h4>
            <div className="space-y-2 text-gray-400">
              {VENUE_INFO.hours.map((item, idx) => (
                <div key={idx} className="flex justify-between border-b border-slate-900 pb-2">
                  <span className="font-medium">{item.day}</span>
                  <span>{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location / Map */}
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-wider">Find Us</h4>
            <div className="w-full h-40 bg-slate-800 rounded-lg overflow-hidden relative">
               {/* Map Placeholder */}
               <img 
                 src="https://picsum.photos/seed/map/400/300" 
                 alt="Map location" 
                 className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
               />
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <div className="bg-slate-900/80 px-4 py-2 rounded text-xs text-white">Map loading...</div>
               </div>
            </div>
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(VENUE_INFO.address)}`}
              target="_blank"
              rel="noreferrer"
              className="block text-center text-sm text-yellow-500 hover:text-white"
            >
              Get Directions on Google Maps
            </a>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 text-center">
          <p className="text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} {VENUE_INFO.full_name}. All rights reserved. 
            <span className="mx-2">|</span> 
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;