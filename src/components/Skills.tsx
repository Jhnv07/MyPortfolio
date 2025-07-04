import React from 'react';

const Skills = () => {
  const skills = [
    { 
      name: 'Frontend',
      technologies: [
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'Tailwind CSS', logo: '/src/assets/tailwind logo.png' }
      ]
    },
    { 
      name: 'Backend',
      technologies: [
        { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
      ]
    },
    { 
      name: 'Collaboration',
      technologies: [
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }
      ]
    },
    { 
      name: 'Design',
      technologies: [
        { name: 'Canva', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
        { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-red-950 to-rose-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A versatile toolkit shaped by curiosity, precision, and a passion for building.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-gradient-to-br from-gray-800 to-red-900 p-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-rose-500/10 transition-all duration-300 hover:scale-105 border border-rose-800/50"
            >
              {/* Skill Category Header */}
              <div className="text-center mb-6">
                <h4 className="text-xl font-semibold text-white">
                  {skill.name}
                </h4>
              </div>

              {/* Technology Icons Grid */}
              <div className="grid grid-cols-2 gap-3">
                {skill.technologies.map((tech, techIndex) => (
                  <div 
                    key={techIndex}
                    className="flex flex-col items-center p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors group"
                  >
                    <img 
                      src={tech.logo} 
                      alt={tech.name}
                      className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform object-contain"
                    />
                    <span className="text-xs text-gray-300 text-center font-medium">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;