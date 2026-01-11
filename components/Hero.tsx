import React from 'react';
import { Play, Disc, Music } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-[95vh] w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Fretboard Background Effect */}
      <div className="absolute inset-0 z-0 flex justify-between px-[10%] pointer-events-none opacity-20">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-[1px] h-full bg-slate-500/50 relative">
            <div className="absolute inset-0 bg-yellow-500/20 blur-sm animate-vibrate" style={{ animationDelay: `${i * 0.1}s` }}></div>
          </div>
        ))}
      </div>

      {/* Stage Haze / Smoke */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-transparent to-black/80"></div>
      
      {/* Decorative Stage Lights */}
      <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] animate-pulse [animation-delay:1s]"></div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="max-w-3xl text-center lg:text-left">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 bg-red-600 text-white font-rock text-xl tracking-widest uppercase">
             <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
             Live in Black Mountain
          </div>
          
          <h1 className="font-rock text-8xl md:text-[11rem] leading-[0.8] text-white tracking-tighter mb-8 drop-shadow-2xl">
            SILVER<span className="text-red-600 text-glow-red">ADOS</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center gap-8 mt-12">
            <a 
              href="#events" 
              className="group relative bg-white text-black px-12 py-5 font-rock text-2xl tracking-wider hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              GET TICKETS
              <div className="absolute -bottom-2 -right-2 w-full h-full border-2 border-red-600 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>
            </a>
            
            <button className="flex items-center gap-3 text-white font-rock text-xl tracking-widest hover:text-red-600 transition-colors group">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-red-600">
                <Play className="w-4 h-4 fill-current" />
              </div>
              WATCH THE VIBE
            </button>
          </div>
        </div>

        {/* Interactive Spinning Vinyl */}
        <div className="hidden lg:block relative group perspective-1000">
          <div className="w-[450px] h-[450px] bg-zinc-900 rounded-full flex items-center justify-center animate-vinyl shadow-[0_0_100px_rgba(229,62,62,0.2)] group-hover:animation-pause border-[15px] border-zinc-800 relative">
            <div className="absolute inset-0 rounded-full border border-white/5 opacity-40"></div>
            <div className="absolute inset-10 rounded-full border border-white/5 opacity-40"></div>
            <div className="absolute inset-20 rounded-full border border-white/5 opacity-40"></div>
            
            <div className="w-48 h-48 bg-red-600 rounded-full flex items-center justify-center shadow-inner overflow-hidden border-4 border-black">
               <img src="https://picsum.photos/seed/silverados/200/200" className="w-full h-full object-cover opacity-50" alt="Label" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-rock text-3xl text-white tracking-widest text-center px-4 leading-none">THE SOUND OF BLACK MOUNTAIN</span>
               </div>
            </div>
            {/* Needle */}
            <div className="absolute -top-10 -right-10 w-4 h-64 bg-slate-400 origin-bottom transform rotate-45 group-hover:rotate-[35deg] transition-transform duration-1000"></div>
          </div>
        </div>
      </div>

      {/* Soundwave Animation at Bottom */}
      <div className="absolute bottom-0 left-0 w-full flex items-end justify-center gap-1 px-4 h-16 pointer-events-none overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <div 
            key={i} 
            className="w-full max-w-[12px] bg-red-600/30 rounded-t-sm"
            style={{ 
              height: `${10 + Math.random() * 60}%`,
              transition: 'height 0.2s ease-in-out',
              animation: `eq-bounce ${0.4 + Math.random() * 1}s infinite alternate`
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;