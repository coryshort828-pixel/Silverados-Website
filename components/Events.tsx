import React from 'react';
import { MOCK_EVENTS } from '../constants';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Events: React.FC = () => {
  return (
    <section id="events" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-2">EVENT CALENDAR</h2>
            <p className="text-gray-400">Live music, pool tournaments, and specials.</p>
          </div>
          <a href="https://facebook.com/silveradoswnc" target="_blank" rel="noreferrer" className="hidden md:inline-flex items-center text-yellow-500 hover:text-white transition-colors mt-4 md:mt-0">
            View full calendar on Facebook &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_EVENTS.map((event) => (
            <div key={event.id} className="group flex flex-col bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-xl hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-1">
              
              {/* Thumbnail Image Container */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
                
                {/* Time Badge */}
                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm border border-slate-700 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-yellow-500" />
                  {event.time}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 relative">
                {/* Floating Date Badge */}
                <div className="absolute -top-10 left-6 bg-yellow-500 text-slate-900 rounded-lg p-2.5 shadow-lg text-center min-w-[4rem] group-hover:bg-yellow-400 transition-colors">
                  <span className="block text-xs font-bold uppercase tracking-wider opacity-90">{event.day.substring(0, 3)}</span>
                  <span className="block text-2xl font-display font-bold leading-none mt-0.5">{event.date.split(' ')[1]}</span>
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors leading-tight">
                    {event.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                    {event.description}
                  </p>
                  
                  <div className="mt-auto border-t border-slate-800 pt-4 flex justify-between items-center">
                     <span className="text-xs text-slate-500 font-medium uppercase tracking-wider flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> Indoor Stage
                     </span>
                     <button className="text-yellow-500 text-sm font-bold uppercase tracking-wider hover:text-white transition-colors flex items-center gap-1">
                       Details <Calendar className="w-4 h-4" />
                     </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
           <a href="https://facebook.com/silveradoswnc" target="_blank" rel="noreferrer" className="inline-block px-6 py-3 border border-slate-700 rounded-full text-yellow-500 font-medium hover:bg-slate-800 transition-colors">
            View full calendar on Facebook &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;