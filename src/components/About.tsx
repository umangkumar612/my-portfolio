import React from 'react';
import { Code, GraduationCap as Graduation, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Graduation className="text-blue-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">Education</h3>
              </div>
              <p className="text-gray-600">
                Currently pursuing my Bachelor's of Technology(B.Tech) in Computer Science at Galgotias University, 
                where I'm in final year. I maintain a strong academic record while actively 
                participating in coding competitions and hackathons.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-green-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">Development Journey</h3>
              </div>
              <p className="text-gray-600">
                My programming journey began with Java and has evolved to include full-stack web development. 
                I specialize in React for frontend development and have experience with backend technologies, 
                always eager to learn new frameworks and tools.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="text-purple-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">Passion & Goals</h3>
              </div>
              <p className="text-gray-600">
                I'm passionate about creating solutions that make a difference. Whether it's building 
                user-friendly web applications or developing efficient backend systems, I strive to 
                write clean, maintainable code that solves real-world problems.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>3rd Year CS Student at Galgotias University</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Specialized in Java & Web Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Built 4+ Major Projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Open to Learning New Technologies</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Enjoys Problem Solving & Code Optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;