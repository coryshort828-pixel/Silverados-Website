import React from 'react';
import { MOCK_EVENTS } from '../constants';
import { MoveRight, Ticket, Flame } from 'lucide-react';

const Events: React.FC = () => {
  return (
    <section id="lineup" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 text-center md:text-left gap-8">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <Flame className="text-red-600 w-6 h-6 animate-pulse" />
              <span className="text-red-600 font-rock text-2xl tracking-[0.2em]">NOW TRENDING</span>
            </div>
            <h2 className="text-7xl md:text-9xl font-rock text-white tracking-tighter leading-none">
              STAGE <span className="text-red-600 text-glow-red">SCHEDULE</span>
            </h2>
          </div>
          <p className="text-slate-500 font-rock text-2xl tracking-widest uppercase border-l-2 border-red-600 pl-6 hidden md:block">
            No Backing Tracks.<br/>Pure Mountain Grunt.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {MOCK_EVENTS.map((event, idx) => (
            <div 
              key={event.id}
              className={`group flex flex-col sm:flex-row bg-[#111] overflow-hidden hover:shadow-[0_0_60px_rgba(229,62,62,0.1)] transition-all duration-500 border border-white/5 relative ${idx === 0 ? 'lg:col-span-2' : ''}`}
            >
              {/* Ticket Perforation Line */}
              <div className="absolute left-[35%] top-0 bottom-0 w-[1px] border-l border-dashed border-white/10 hidden sm:block z-20"></div>
              
              <div className={`w-full overflow-hidden relative ${idx === 0 ? 'sm:w-[45%] h-80 sm:h-auto' : 'sm:w-[35%] h-64 sm:h-auto'}`}>
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                <div className="absolute top-6 left-6 bg-red-600 text-white font-rock px-4 py-1 text-2xl tracking-widest shadow-xl">
                  {event.date}
                </div>
              </div>

              <div className="flex-1 p-8 sm:p-12 flex flex-col justify-between ticket-edge z-10">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-white/5 border border-red-600/30 text-red-600 font-rock text-sm tracking-widest uppercase rounded">
                      {event.genre}
                    </span>
                    <span className="text-slate-500 font-rock text-sm tracking-widest uppercase">DOORS @ {event.time}</span>
                  </div>
                  <h3 className={`${idx === 0 ? 'text-5xl md:text-7xl' : 'text-4xl'} font-rock text-white mb-6 group-hover:text-red-600 transition-colors leading-none tracking-wide`}>
                    {event.title}
                  </h3>
                </div>
                
                <div className="flex items-center justify-between mt-8">
                  <button className="flex items-center gap-3 bg-red-600 text-white px-8 py-4 font-rock text-2xl tracking-wider hover:bg-white hover:text-black transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-red-600/20">
                    <Ticket className="w-6 h-6" />
                    GET PASS
                  </button>
                  <button className="text-slate-600 hover:text-red-600 transition-colors group">
                     <MoveRight className="w-10 h-10 transform group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 p-16 border border-white/5 bg-zinc-900/30 backdrop-blur-sm text-center relative overflow-hidden group">
           <div className="absolute inset-0 stage-smoke opacity-20"></div>
           <p className="font-rock text-4xl text-white mb-8 tracking-widest relative z-10">READY TO ROCK THE STAGE?</p>
           <a 
             href="mailto:silveradosinfo@gmail.com" 
             className="relative z-10 inline-block px-12 py-5 bg-white text-black font-rock text-3xl hover:bg-red-600 hover:text-white transition-all duration-300 transform group-hover:-rotate-1"
           >
             SUBMIT YOUR DEMO
           </a>
           <div className="absolute -bottom-10 -right-10 opacity-5 transform rotate-12 group-hover:scale-110 transition-transform">
              <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400" alt="Gear" className="w-64" />
           </div>
        </div>
      </div>
    </section>
  );
};

export default Events;