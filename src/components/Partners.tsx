import React from 'react';
import { Building2 } from 'lucide-react';

export default function Partners() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15),transparent_70%)]"></div>
      
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-24 bg-gradient-to-r from-purple-400 to-violet-400 text-transparent bg-clip-text">
          Our Partners
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((partner) => (
            <div key={partner} 
                 className="group relative bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-violet-600/0 opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl"></div>
              <Building2 className="w-16 h-16 mx-auto text-purple-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}