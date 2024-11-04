import React from 'react';
import { Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/90 via-indigo-900/80 to-purple-900/90 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-20 text-center">
        <div className="space-y-8">
          <div className="inline-block animate-float">
            <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium">
              48 Hours of Innovation
            </span>
          </div>
          
          <h1 className="text-7xl md:text-8xl font-bold mb-6">
            <span className="inline-block bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text animate-gradient">
              TechNova
            </span>
            <span className="block text-3xl md:text-4xl mt-4 text-gray-300">2024 Hackathon</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Join the most innovative minds to build, learn, and transform ideas into reality
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full font-semibold text-lg overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:scale-105">
              <span className="relative z-10">Register Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            
            <div className="flex items-center gap-4 text-lg">
              <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm">
                <Calendar className="w-6 h-6" />
              </div>
              <span>March 15-17, 2024</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </header>
  );
}