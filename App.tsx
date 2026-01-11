import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Footer from './components/Footer';
import Concierge from './components/Concierge';

function App() {
  // Global smooth scroll refresh on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] font-sans selection:bg-red-600 selection:text-white">
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        
        {/* Experience & Features */}
        <About />
        
        {/* Live Lineup */}
        <Events />
        
        {/* Dog Park Visual Teaser - Enhanced with Electric Red / Rock aesthetic */}
        <section className="py-24 bg-gradient-to-b from-black to-red-900/20 relative overflow-hidden">
          <div className="absolute inset-0 grunge-overlay pointer-events-none opacity-20"></div>
          <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <div className="inline-block px-8 py-2 bg-red-600 text-white font-rock text-xl tracking-[0.3em] mb-8 shadow-[0_0_40px_-5px_rgba(229,62,62,0.5)]">
              PHASE TWO
            </div>
            <h2 className="text-5xl md:text-8xl font-rock text-white mb-6 tracking-tighter">
              DOG PARK <span className="text-glow-red">2026</span>
            </h2>
            <p className="mt-4 text-slate-400 font-medium text-lg max-w-2xl mx-auto leading-relaxed">
              We're redefining the "Tail-gate". A state-of-the-art social park where your best friend runs free while you enjoy a cold WNC craft beer.
            </p>
            
            <div className="mt-12 flex justify-center items-center gap-10 opacity-40">
               <div className="w-12 h-[1px] bg-white/20"></div>
               <span className="font-rock text-white uppercase tracking-[1em] text-[12px]">Work In Progress</span>
               <div className="w-12 h-[1px] bg-white/20"></div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* AI Assistant */}
      <Concierge />
    </div>
  );
}

export default App;
