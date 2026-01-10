import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Footer from './components/Footer';
import Concierge from './components/Concierge';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-yellow-500 selection:text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Events />
        
        {/* Dog Park Teaser Section */}
        <section className="py-16 bg-gradient-to-r from-yellow-500 to-yellow-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4 transform -rotate-2 inline-block bg-white px-4 py-1 shadow-lg">
              COMING 2026
            </h2>
            <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mt-4">
              SILVERADOS DOG PARK
            </h3>
            <p className="mt-4 text-slate-900 font-medium text-lg max-w-2xl mx-auto">
              We're building the ultimate hangout for you and your best friend. 
              Get ready for a dedicated space where pups play and owners relax.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <Concierge />
    </div>
  );
}

export default App;