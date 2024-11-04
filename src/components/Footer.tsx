import React from 'react';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { name: 'Twitter', icon: Twitter },
    { name: 'LinkedIn', icon: Linkedin },
    { name: 'Instagram', icon: Instagram }
  ];

  return (
    <footer className="bg-gray-900 py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="flex justify-center space-x-8 mb-8">
          {socialLinks.map(({ name, icon: Icon }) => (
            <a
              key={name}
              href="#"
              className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <Icon className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
            </a>
          ))}
        </div>
        <p className="text-gray-400">© 2024 TechNova Hackathon. All rights reserved.</p>
      </div>
    </footer>
  );
}