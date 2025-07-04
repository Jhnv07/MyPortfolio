import React from 'react';
import { Award, Calendar, Trophy } from 'lucide-react';

const Hackathons = () => {
  const achievements = [
    {
      type: 'Hackathon',
      title: 'IEEE RGIPT Kode Kurrent',
      position: 'Grand Finale Qualifier',
      date: '2025',
      description: 'Built a Text-to-Speech and Voice Cloning web app enabling users to enter text and generate high-quality audio in chosen voice samples, with options to listen or download.',
      icon: Trophy,
      tech: ['JavaScript', 'CSS', 'Python', 'HTML']
    },
    {
      type: 'Certification',
      title: 'Java from Udemy',
      position: 'Course Completed',
      date: '2025',
      description: 'Completed an in-depth Java course on Udemy covering core concepts, object-oriented programming, and real-world project development.',
      icon: Award,
      tech: ['Java']
    }
  ];

  return (
    <section id="hackathons" className="py-20 bg-gradient-to-br from-gray-900 via-red-950 to-rose-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Hackathons & Certifications
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Recognitions that showcase my commitment to growth, creativity, and driving meaningful change through technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-red-900 p-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-rose-500/10 transition-all duration-300 hover:scale-105 border border-rose-800/50"
            >
              {/* Achievement Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="p-3 bg-rose-600 rounded-lg text-white mr-4">
                    <achievement.icon size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        achievement.type === 'Hackathon' 
                          ? 'bg-rose-950/50 text-rose-300 border border-rose-500/30'
                          : 'bg-amber-950/50 text-amber-300 border border-amber-500/30'
                      }`}>
                        {achievement.type}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar size={14} className="mr-1" />
                        {achievement.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {achievement.title}
                    </h3>
                    <p className="text-rose-300 font-semibold">
                      {achievement.position}
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-4 leading-relaxed">
                {achievement.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {achievement.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;