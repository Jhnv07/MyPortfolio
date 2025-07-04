import React from 'react';
import { Heart, Code, Lightbulb, Users, Target, Rocket } from 'lucide-react';

const About = () => {
  const values = [
    { icon: Heart, label: 'Passion', description: 'Driven by curiosity' },
    { icon: Code, label: 'Innovation', description: 'Building the future' },
    { icon: Lightbulb, label: 'Creativity', description: 'Thinking outside the box' },
    { icon: Users, label: 'Collaboration', description: 'Growing together' },
    { icon: Target, label: 'Excellence', description: 'Pursuing perfection' },
    { icon: Rocket, label: 'Impact', description: 'Making a difference' }
  ];

  return (
    <section id="about" className="py-20 bg-red-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Future AI engineer passionate about building meaningful tech 
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-gray-800 to-red-900 p-8 rounded-xl shadow-lg border border-rose-800/50">
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
              <p className="text-center text-2xl font-semibold text-white mb-8">
                My Journey
              </p>
              <p className="text-justify">
                What began as a middle school experiment—trying to understand the magic behind a website—quickly turned into a lifelong pursuit of creating digital experiences that feel effortless and impactful. Today, I'm dedicated to transforming ideas into solutions that truly make a difference.
              </p>
              <p className="text-justify">
                I'm passionate about building modern web applications that blend clean, efficient code with thoughtful design. For me, great software goes beyond functionality—it should feel intuitive, engaging, and impactful.
              </p>
              <p className="text-justify">
                Outside of development, I stay inspired by exploring new technologies, contributing to open-source projects, and mentoring aspiring developers. I love being part of a community that's always learning and evolving.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section with Connected Thread */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            What Drives Me
          </h3>
          
          {/* Desktop Layout - Horizontal Thread */}
          <div className="hidden lg:block relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-rose-500 via-red-400 to-rose-500 transform -translate-y-1/2 z-0"></div>
            
            {/* Values */}
            <div className="grid grid-cols-6 gap-4 relative z-10">
              {values.map((value, index) => (
                <div key={index} className="flex flex-col items-center">
                  {/* Icon Circle */}
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-red-600 rounded-full flex items-center justify-center shadow-lg shadow-rose-500/25 mb-4 hover:scale-110 transition-transform duration-300">
                    <value.icon className="text-white" size={24} />
                  </div>
                  
                  {/* Value Content */}
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {value.label}
                    </h4>
                    <p className="text-sm text-gray-300">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Layout - Vertical */}
          <div className="lg:hidden space-y-6">
            {values.map((value, index) => (
              <div key={index} className="flex items-center space-x-4 bg-gradient-to-r from-gray-800 to-red-900 p-4 rounded-lg border border-rose-800/50">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-red-600 rounded-full flex items-center justify-center shadow-lg shadow-rose-500/25">
                  <value.icon className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    {value.label}
                  </h4>
                  <p className="text-sm text-gray-300">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;