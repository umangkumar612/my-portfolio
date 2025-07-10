import React from 'react';
import { ExternalLink, Github, Zap, Briefcase, HelpCircle, BarChart3, Smartphone } from 'lucide-react';


const Projects = () => {
  const projects = [
    {
      title: 'QR Code Generator',
      description: 'A web application that generates QR codes for various types of data including URLs, text, and contact information. Features customizable styling and download options.',
      icon: <Zap size={40} />,
      technologies: ['JavaScript', 'HTML', 'CSS', 'QR.js'],
      github: 'https://github.com/umangkumar612/QRCode_Generator',
      demo: 'https://stupendous-medovik-23bc04.netlify.app/',
      color: 'from-purple-500 to-pink-500',
      features: ['Multiple QR code formats', 'Custom styling options', 'Download functionality', 'Mobile responsive']
    },
    {
      title: 'Job Portal',
      description: 'A comprehensive job portal where employers can post jobs and job seekers can apply. Features user authentication, job search, and application management.',
      icon: <Briefcase size={40} />,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/umangkumar612/Job_Portal',
      demo: '#',
      color: 'from-blue-500 to-cyan-500',
      features: ['User authentication', 'Job posting & search', 'Application tracking', 'Resume upload']
    },
    {
      title: 'Quiz Application',
      description: 'An interactive quiz application with multiple categories, timed questions, and score tracking. Built with React and features a clean, user-friendly interface.',
      icon: <HelpCircle size={40} />,
      technologies: ['React', 'JavaScript', 'CSS', 'Local Storage'],
      github: 'https://github.com/umangkumar612/Quiz_App',
      demo: '#',
      color: 'from-green-500 to-teal-500',
      features: ['Multiple quiz categories', 'Timer functionality', 'Score tracking', 'Progress indicators']
    },
    {
  title: 'Netflix Clone',
  description: 'A responsive Netflix-inspired UI with real-time movie data using TMDB API and Firebase authentication.',
  icon: <Smartphone size={40} />, // ya koi aur icon like <Film />
  technologies: ['React', 'Firebase', 'TMDB API', 'CSS'],
  github: 'https://github.com/umangkumar612/NetflixClone',
  demo: 'https://netflix-clone-umang.netlify.app', // Replace with your actual live URL
  color: 'from-red-500 to-purple-600',
  features: ['Trending & Genre-based movies', 'Firebase Auth', 'My List', 'Responsive UI']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work and the technologies I've been exploring
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              <div className={`bg-gradient-to-r ${project.color} p-6 text-white`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
                <p className="text-white/90">{project.description}</p>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Key Features:</h4>
                  <ul className="text-gray-600 space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <ExternalLink size={18} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;