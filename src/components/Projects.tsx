import React from 'react';
import { Github } from 'lucide-react';

const Projects = () => {
  const project = {
    title: 'Voice Cloner & Text to Speech',
    description: 'My web application allows users to input text and receive high-quality audio output in a selected voice sample—with options to listen or download the result.',
    image: '/src/assets/image.png',
    tech: ['Python', 'JavaScript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/Jhnv07/Voice-Cloner-and-TTS'
  };

  return (
    <section id="projects" className="py-20 bg-red-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Turning ideas into experiences—explore the work that defines my craft.
          </p>
        </div>

        {/* Single Project Layout */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Project Image */}
            <div className="lg:w-1/2">
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl hover:shadow-rose-500/10 transition-all duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 lg:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </div>
            </div>

            {/* Project Content */}
            <div className="lg:w-1/2 space-y-6">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-4 py-2 bg-rose-950/50 text-rose-300 text-sm rounded-full border border-rose-500/30 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex space-x-6">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-gray-300 transition-colors font-medium"
                >
                  <Github size={20} className="mr-2" />
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/Jhnv07?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-rose-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-rose-500 transition-all duration-300 shadow-lg shadow-rose-600/25 hover:shadow-xl hover:shadow-rose-500/30 inline-block"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;