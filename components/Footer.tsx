import React from 'react';
import { VENUE_INFO } from '../constants';
import { MapPin, Mail, Facebook, Instagram, Music, Disc } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#050505] pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Amp Stack Design Element */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 mb-24">
          <div>
            <h3 className="font-rock text-5xl text-white mb-6">
              SILVER<span className="text-red-600">ADOS</span>
            </h3>
            <p className="text-slate-500 font-medium leading-relaxed mb-8 max-w-sm">
              The loudest corner in Black Mountain. Bar, Lounge, and the best damn stage in WNC.
            </p>
            <div className="flex gap-4">
              <a href={VENUE_INFO.social.facebook} className="p-3 bg-zinc-900 border border-white/10 text-white hover:bg-red-600 transition-all">
                <Facebook className="w-6 h-6" />
              </a>
              <a href={VENUE_INFO.social.instagram} className="p-3 bg-zinc-900 border border-white/10 text-white hover:bg-red-600 transition-all">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div>
              <h4 className="font-rock text-2xl text-red-600 mb-6 tracking-widest">SHOW TIMES</h4>
              <div className="space-y-4">
                {VENUE_INFO.hours.map((h, i) => (
                  <div key={i} className="flex justify-between items-end border-b border-white/5 pb-2">
                    <span className="font-rock text-lg text-slate-300 tracking-wider">{h.day}</span>
                    <span className="font-bold text-slate-500 text-xs">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="font-rock text-2xl text-red-600 mb-6 tracking-widest">LOCATION</h4>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(VENUE_INFO.address)}`}
                  target="_blank"
                  className="flex items-start gap-3 group"
                >
                  <MapPin className="w-6 h-6 text-slate-700 group-hover:text-red-600 shrink-0" />
                  <span className="text-slate-400 group-hover:text-white transition-colors">
                    {VENUE_INFO.address}
                  </span>
                </a>
              </div>
              <div>
                <h4 className="font-rock text-2xl text-red-600 mb-6 tracking-widest">BOOKING</h4>
                <a href={`mailto:${VENUE_INFO.email}`} className="flex items-center gap-3 group">
                   <Mail className="w-6 h-6 text-slate-700 group-hover:text-red-600 shrink-0" />
                   <span className="text-slate-400 group-hover:text-white transition-colors">{VENUE_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-4 text-slate-700">
              <Music className="w-4 h-4" />
              <div className="w-1 h-1 rounded-full bg-slate-800"></div>
              <Disc className="w-4 h-4" />
              <div className="w-1 h-1 rounded-full bg-slate-800"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">BLACK MOUNTAIN SOUND CO.</span>
           </div>
           <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">
             &copy; {new Date().getFullYear()} SILVERADOS WNC // TURN IT UP TO 11
           </p>
        </div>
      </div>
    </footer >
  );
};

export default Footer;