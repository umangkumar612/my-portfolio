import React from 'react';
import { Code, GraduationCap as Graduation, Heart } from 'lucide-react';
// import umangPhoto from '../assets/umang.jpg'; // Make sure this path is correct

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE CONTENT */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Graduation className="text-blue-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">Education</h3>
              </div>
              <p className="text-gray-600">
                Currently pursuing my Bachelor of Technology (B.Tech) in Computer Science and Engineering at Galgotias University,
                 where I’m in my final year. I consistently maintain a strong academic record while actively engaging in coding competitions,
                  hackathons, and open-source contributions. My passion for problem-solving has led me to build real-world projects 
                  using modern web technologies like React, Node.js, and MongoDB. I'm also strengthening my foundations in data structures, 
                  algorithms, and system design, preparing myself for a career in full-stack development or backend engineering.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-green-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">Development Journey</h3>
              </div>
              <p className="text-gray-600">
                My programming journey began with Java, where I built a solid foundation in object-oriented programming and
                 problem-solving. Over time, I transitioned into full-stack web development, gaining hands-on experience 
                 in building dynamic and responsive web applications. I specialize in React.js for front-end development and
                  have worked with backend technologies like Node.js, Express, and MongoDB to create scalable and efficient systems.
                   I'm always eager to explore new frameworks, tools, and best practices to stay updated and continuously improve as a developer.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="text-purple-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">Passion & Goals</h3>
              </div>
              <p className="text-gray-600">
                I'm passionate about building meaningful solutions that create real impact. 
                Whether it's crafting intuitive, user-centric web applications or architecting efficient 
                and scalable backend systems, I focus on writing clean, maintainable code. 
                My goal is to solve real-world problems through technology, always striving for performance,
                 reliability, and simplicity in everything I develop.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE CONTENT WITH IMAGE */}
          <div className="relative space-y-6">
            {/* <div className="flex justify-center">
              <img
                src={umangPhoto}
                alt="Umang Kumar"
                className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div> */}

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>🎓 Final-year Computer Science Engineering student at Galgotias University</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>💻 Full-Stack Web Developer – Skilled in MERN Stack (MongoDB, Express.js, React.js, Node.js) with clean and scalable coding practices</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>🧠 Strong grip on Data Structures, Algorithms, and system design fundamentals</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>💼 Developed APIs, integrated RESTful services, handled deployment using Render, Railway, and GitHub Pages</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>📘 Actively learning and applying modern tools like Tailwind CSS, Redux Toolkit, WebSockets, and MongoDB Aggregation</span>
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
