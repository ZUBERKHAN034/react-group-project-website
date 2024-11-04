import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const team = [
  {
    name: "Sarah Johnson",
    role: "Tech Lead at Google",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    github: "#",
    linkedin: "#"
  },
  {
    name: "Michael Chen",
    role: "AI Researcher",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    github: "#",
    linkedin: "#"
  },
  {
    name: "Emily Rodriguez",
    role: "Startup Founder",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    github: "#",
    linkedin: "#"
  }
];

export default function Team() {
  return (
    <section className="py-32 bg-gray-900 relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-600/20 to-transparent rounded-full blur-3xl animate-rotate"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-indigo-600/20 to-transparent rounded-full blur-3xl animate-rotate"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 animate-slide-up">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 text-transparent bg-clip-text animate-gradient">
            Mentors & Judges
          </h2>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((person, index) => (
            <div key={index} 
                 className="group relative"
                 style={{ animationDelay: `${index * 150}ms` }}>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-violet-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-gray-800/40 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50 group-hover:border-purple-500/50 transition-all duration-300 p-8">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  {/* Rotating gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-violet-500 rounded-full animate-rotate"></div>
                  {/* Inner gradient overlay */}
                  <div className="absolute inset-1 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full"></div>
                  {/* Profile image */}
                  <img 
                    src={person.image} 
                    alt={person.name}
                    className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-violet-400 text-transparent bg-clip-text">
                    {person.name}
                  </h3>
                  <p className="text-purple-400 mb-4">{person.role}</p>
                  
                  <div className="flex justify-center space-x-4">
                    <a href={person.github} className="p-2 rounded-full bg-gray-700/50 hover:bg-purple-500/50 transition-colors duration-300">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={person.linkedin} className="p-2 rounded-full bg-gray-700/50 hover:bg-purple-500/50 transition-colors duration-300">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}