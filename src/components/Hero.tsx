import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullName = 'Jahnavi Yadav';
  const typingSpeed = 150; // milliseconds per character

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayedText(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Keep cursor blinking after typing is complete
        setInterval(() => {
          setShowCursor(prev => !prev);
        }, 530);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-red-950 to-rose-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(225,29,72,0.15),transparent_70%)]"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Profile Image Placeholder */}
          <div className="flex justify-center mb-8">
            <div className="w-48 h-48 bg-gradient-to-br from-rose-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl shadow-rose-500/25">
              <div className="w-44 h-44 bg-gray-800 rounded-full flex items-center justify-center border-2 border-rose-400/30">
                <span className="text-6xl font-bold text-rose-400">JY</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight min-h-[1.2em]" style={{ fontFamily: 'Calisto MT, serif' }}>
              <span className="bg-gradient-to-r from-rose-400 to-red-400 bg-clip-text text-transparent">
                {displayedText}
                {showCursor && <span className="text-rose-400">|</span>}
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Undergrad in Dual Degree in CSE and AI '29
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <button 
                onClick={scrollToAbout}
                className="bg-rose-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-rose-500 transition-all duration-300 shadow-lg shadow-rose-600/25 hover:shadow-xl hover:shadow-rose-500/30 hover:scale-105"
              >
                My Work
              </button>
              <button className="border-2 border-rose-400 text-rose-400 px-8 py-4 rounded-lg font-semibold hover:bg-rose-400 hover:text-gray-900 transition-all duration-300">
                Resume
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mt-8">
              <a
                href="https://github.com/Jhnv07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-rose-400 transition-colors p-3 rounded-full hover:bg-rose-950/50"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/jahnavi-yadav-418ba9329/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-rose-400 transition-colors p-3 rounded-full hover:bg-rose-950/50"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:jahnavi.yadav007@gmail.com"
                className="text-gray-400 hover:text-rose-400 transition-colors p-3 rounded-full hover:bg-rose-950/50"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="text-gray-400 hover:text-rose-400 transition-colors"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;