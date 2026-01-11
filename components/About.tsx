import React from 'react';
import { FEATURES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-[#050505] relative">
      <div className="absolute inset-0 grunge-overlay pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="w-full md:w-1/3 sticky top-32">
             <span className="text-red-600 font-rock text-2xl tracking-[0.3em] mb-4 block">TOUR RIDER // 2025</span>
             <h2 className="text-7xl font-rock text-white leading-none mb-8">
               STAY <br/><span className="text-glow-red">LOUD</span>
             </h2>
             <p className="text-slate-400 font-medium text-lg leading-relaxed">
               Silverados isn't just a bar. It's an amplifier for the community. High-voltage energy, local grits, and the best pool tables in WNC.
             </p>
             <div className="mt-12 p-8 border border-white/10 bg-zinc-900/50 backdrop-blur-md rounded-br-[4rem]">
                <h3 className="font-rock text-2xl text-yellow-500 mb-4 tracking-widest">THE SETUP</h3>
                <ul className="space-y-4">
                   <li className="flex items-center gap-3 text-slate-300 font-bold uppercase text-xs tracking-widest">
                      <div className="w-1.5 h-1.5 bg-red-600 rotate-45"></div> Pro 8-Ball Tables
                   </li>
                   <li className="flex items-center gap-3 text-slate-300 font-bold uppercase text-xs tracking-widest">
                      <div className="w-1.5 h-1.5 bg-red-600 rotate-45"></div> Local Craft Tap Takeover
                   </li>
                   <li className="flex items-center gap-3 text-slate-300 font-bold uppercase text-xs tracking-widest">
                      <div className="w-1.5 h-1.5 bg-red-600 rotate-45"></div> Full Gear Rental Stage
                   </li>
                </ul>
             </div>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
            {FEATURES.map((feature, i) => (
              <div 
                key={feature.id}
                className={`group relative p-12 bg-[#111] border border-white/5 overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:border-red-600/50 ${i === 0 ? 'md:col-span-2 aspect-[21/9]' : ''}`}
              >
                {/* Amp Tolex Texture */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/leather.png')] opacity-10 pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-4xl font-rock text-white mb-4 tracking-wide group-hover:text-red-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                    {feature.description}
                  </p>
                </div>

                {/* Speaker Grill Corner Detail */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-slate-800/20 translate-x-16 translate-y-16 rotate-45 group-hover:bg-red-600/20 transition-colors"></div>
              </div>
            ))}

            {/* Special Dog Park Callout */}
            <div className="md:col-span-2 p-12 bg-red-600 flex flex-col md:flex-row items-center justify-between gap-8 group cursor-help">
               <div className="flex-1">
                 <h3 className="text-5xl font-rock text-black leading-none mb-2 tracking-tighter">FUTURE VENUE: DOG PARK 2026</h3>
                 <p className="text-red-100 font-bold uppercase tracking-widest text-xs">Bringing the pack to the park. Stay tuned for WNC's first high-octane dog venue.</p>
               </div>
               <div className="w-24 h-24 rounded-full border-4 border-black flex items-center justify-center font-rock text-4xl text-black transform group-hover:rotate-12 transition-transform">
                  WIP
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;