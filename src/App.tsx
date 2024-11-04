import React from 'react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Partners from './components/Partners';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <Timeline />
      <Partners />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;