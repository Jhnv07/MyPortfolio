import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-red-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Feel free to reach out if you'd like to discuss collaborations, creative projects, or explore ideas around technology and design.
          </p>
        </div>

        {/* Contact Information - Centered */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800 to-red-900 p-8 rounded-xl shadow-lg border border-rose-800/50">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Let's Connect
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Whether you're planning your next project, exploring collaboration, or simply want to exchange ideas about technology, I'm always open to a conversation.
              </p>
            </div>

            <div className="space-y-6 max-w-md mx-auto">
              <div className="flex flex-col items-center text-center">
                <div className="flex-shrink-0 p-3 bg-rose-950/50 rounded-lg border border-rose-500/30 mb-3">
                  <Mail className="text-rose-400" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                  <a 
                    href="mailto:jahnavi.yadav007@gmail.com"
                    className="text-gray-300 hover:text-rose-400 transition-colors"
                  >
                    jahnavi.yadav007@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex-shrink-0 p-3 bg-rose-950/50 rounded-lg border border-rose-500/30 mb-3">
                  <MapPin className="text-rose-400" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Location</h4>
                  <p className="text-gray-300">Noida, UP, India</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-8">
              <a
                href="mailto:jahnavi.yadav007@gmail.com"
                className="inline-flex items-center bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-500 transition-all duration-300 shadow-lg shadow-rose-600/25 hover:shadow-xl hover:shadow-rose-500/30"
              >
                <Mail size={20} className="mr-2" />
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;