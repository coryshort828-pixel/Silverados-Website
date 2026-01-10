import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://picsum.photos/seed/silveradosnight/1920/1080")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-slate-900"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-yellow-500 font-bold tracking-[0.2em] text-sm md:text-lg mb-4 uppercase animate-fade-in-up">
          Black Mountain, NC
        </h2>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight shadow-black drop-shadow-lg">
          SILVERADOS
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mb-8 font-light leading-relaxed">
          The premier bar & lounge for locals and visitors alike. <br/>
          Pool tables, live music, and good times.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#events" 
            className="px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold rounded-sm uppercase tracking-wide transition-all transform hover:scale-105"
          >
            See Events
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 border border-white text-white hover:bg-white/10 font-bold rounded-sm uppercase tracking-wide transition-all"
          >
            Visit Us
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-white">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
};

export default Hero;