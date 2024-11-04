import React from 'react';

const timelineEvents = [
  {
    date: "March 15, 10:00 AM",
    title: "Opening Ceremony",
    description: "Kickoff and team formation",
    icon: "🚀"
  },
  {
    date: "March 15, 2:00 PM",
    title: "Hacking Begins",
    description: "Start your innovation journey",
    icon: "💻"
  },
  {
    date: "March 16, 10:00 AM",
    title: "Mentor Sessions",
    description: "One-on-one mentoring",
    icon: "🎯"
  },
  {
    date: "March 17, 2:00 PM",
    title: "Project Submission",
    description: "Submit your final project",
    icon: "📤"
  },
  {
    date: "March 17, 4:00 PM",
    title: "Final Presentations",
    description: "Present to our judges",
    icon: "🏆"
  }
];

export default function Timeline() {
  return (
    <section className="py-32 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-24 bg-gradient-to-r from-purple-400 to-violet-400 text-transparent bg-clip-text">
          Event Timeline
        </h2>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-600 via-violet-600 to-indigo-600"></div>
          
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative mb-16 group">
              <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:transform hover:scale-102 transition-all duration-300 border border-gray-700/50 group-hover:border-purple-500/50 group-hover:shadow-purple-500/20">
                    <div className="text-4xl mb-4">{event.icon}</div>
                    <h3 className="text-xl font-bold text-purple-400 mb-2">{event.date}</h3>
                    <h4 className="text-xl font-semibold text-white mb-2">{event.title}</h4>
                    <p className="text-gray-400">{event.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                  <div className="w-4 h-4 rounded-full bg-purple-600 group-hover:scale-150 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}