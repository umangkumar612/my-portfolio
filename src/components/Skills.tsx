import React from 'react';
import { Code2, Globe, Smartphone, Server, GitBranch, BookOpen } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      name: 'Java',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      level: 85,
      color: 'from-orange-400 to-red-500',
      description: 'Object-oriented programming, Data Structures, Algorithms'
    },
    {
      name: 'HTML/CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      level: 90,
      color: 'from-orange-500 to-pink-500',
      description: 'Semantic HTML, Responsive Design, CSS Grid & Flexbox'
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      level: 80,
      color: 'from-yellow-400 to-orange-500',
      description: 'ES6+, DOM Manipulation, Async Programming'
    },
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      level: 75,
      color: 'from-blue-400 to-cyan-500',
      description: 'Hooks, State Management, Component Architecture'
    },
    {
      name: 'Backend (Node.js)',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      level: 70,
      color: 'from-green-400 to-blue-500',
      description: 'Express.js, MongoDB, RESTful APIs'
    },
    {
      name: 'Git & GitHub',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      level: 85,
      color: 'from-gray-500 to-gray-700',
      description: 'Version Control, Collaboration, Branching Strategies'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Tech Stack</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tools, technologies, and languages I use to build clean and scalable solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className={`bg-gradient-to-r ${skill.color} p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4`}>
                <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-1">{skill.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{skill.description}</p>

              <div className="mb-2">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className={`bg-gradient-to-r ${skill.color} h-2 transition-all duration-1000 ease-in-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
