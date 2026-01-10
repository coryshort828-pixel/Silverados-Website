import React from 'react';
import { FEATURES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            MORE THAN JUST A BAR
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Silverados is Black Mountain's go-to spot for nightlife. Whether you're looking to shoot pool, catch a local band, or grab a bite from a food truck, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-slate-800 p-8 rounded-lg border border-slate-700 hover:border-yellow-500/50 transition-colors group"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-500 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-800 rounded-xl p-8 border border-yellow-500/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-yellow-500 text-slate-900 text-xs font-bold px-3 py-1 transform rotate-12">
            UPDATE
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
             <div className="flex-1">
                <h3 className="text-2xl font-display font-bold text-white mb-2">Important Venue Update</h3>
                <p className="text-gray-300">
                  Please note: While you may see older information online about large outdoor concerts, 
                  <span className="text-yellow-400 font-semibold"> Silverados no longer hosts outdoor music festivals</span>. 
                  We have transitioned to a focused bar & lounge experience with intimate indoor entertainment.
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;