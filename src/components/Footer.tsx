import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-rose-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-rose-400">Jahnavi Yadav</h3>
            <p className="text-gray-300 leading-relaxed">
              Future AI engineer passionate about building meaningful tech
              and solving complex problems with elegant solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              <a href="#hero" className="block text-gray-300 hover:text-rose-400 transition-colors">
                Home
              </a>
              <a href="#about" className="block text-gray-300 hover:text-rose-400 transition-colors">
                About
              </a>
              <a href="#skills" className="block text-gray-300 hover:text-rose-400 transition-colors">
                Skills
              </a>
              <a href="#projects" className="block text-gray-300 hover:text-rose-400 transition-colors">
                Projects
              </a>
              <a href="#hackathons" className="block text-gray-300 hover:text-rose-400 transition-colors">
                Achievements
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-rose-400 transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Jhnv07/Jhnv07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-rose-400 transition-colors p-2 rounded-lg hover:bg-red-950"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/jahnavi-yadav-418ba9329/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-rose-400 transition-colors p-2 rounded-lg hover:bg-red-950"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:jahnavi.yadav007@gmail.com"
                className="text-gray-300 hover:text-rose-400 transition-colors p-2 rounded-lg hover:bg-red-950"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-300 text-sm">
              Available for freelance projects and full-time opportunities.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-rose-800/50 mt-8 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center">
            Jahnavi Yadav
            <span className="mx-2">•</span>
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;