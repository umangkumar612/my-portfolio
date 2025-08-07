  import React from 'react';
  import { ArrowDown, Download } from 'lucide-react';

  const Hero = () => {
    const scrollToAbout = () => {
      const element = document.getElementById('about');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Relative to public folder
    link.download = 'Umang_Kumar_Resume.pdf'; // Filename when downloaded
    link.click();
  };  
    return (
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
                Hi, I'm <span className="text-blue-600">Umang</span>
              </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
    A final-year CSE student at Galgotias University, passionate about building web apps with
    the MERN stack and turning ideas into clean, functional code.
  </p>


              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button
                  onClick={scrollToAbout}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Learn More About Me
                </button>
                <button
                  onClick={downloadResume}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  <Download size={20} />
                  Download Resume
                </button>
              </div>
            </div>
            
            <div className="animate-bounce">
              <button
                onClick={scrollToAbout}
                className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                <ArrowDown size={32} />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Hero;