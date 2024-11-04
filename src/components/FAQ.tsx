import React from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Who can participate?",
    answer: "Anyone aged 18 and above with a passion for technology and innovation can participate."
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, charger, and any hardware you plan to use in your project."
  },
  {
    question: "Is there a participation fee?",
    answer: "No, participation is completely free! We provide food, drinks, and swag."
  },
  {
    question: "What are the prizes?",
    answer: "Total prize pool of $10,000 with additional sponsor prizes and opportunities."
  }
];

export default function FAQ() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-24 bg-gradient-to-r from-purple-400 to-violet-400 text-transparent bg-clip-text">
          FAQ
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <details key={index} className="group">
              <summary className="flex items-center justify-between p-6 cursor-pointer bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                <span className="text-lg font-semibold">{faq.question}</span>
                <ChevronDown className="w-5 h-5 transform transition-transform group-open:rotate-180" />
              </summary>
              <div className="p-6 mt-2 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50">
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}