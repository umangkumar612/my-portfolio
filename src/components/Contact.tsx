import React from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's connect and discuss opportunities, projects, or just have a conversation about technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-600">Email</p>
                    <a
                      href="mailto:umangkumarravi123@gmail.com"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      umangkumarravi123@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
  <div className="bg-blue-100 p-3 rounded-lg">
    <Phone className="text-blue-600" size={24} />
  </div>
  <div>
    <p className="text-gray-600">Phone</p>
    <a
      href="tel:+919258405605"
      className="text-blue-600 hover:text-blue-700 font-medium"
    >
      +91 9258405605
    </a>
  </div>
</div>
                <div className="flex items-center gap-4">
  <div className="bg-blue-100 p-3 rounded-lg">
    <img
      src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
      alt="WhatsApp"
      className="w-6 h-6"
    />
  </div>
  <div>
    <p className="text-gray-600">WhatsApp</p>
    <a
      href="https://wa.me/919258405605"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-700 font-medium"
    >
      Message on WhatsApp
    </a>
  </div>
</div>



                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-600">Location</p>
                    <p className="text-gray-800 font-medium">Galgotias University, Greater Noida</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/umang-kumar-3rd-193ab2279/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/umangkumar612"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200 transform hover:scale-105"
                >
                  <Github size={24} />
                </a>
                <a
                  href="mailto:umangkumarravi123@gmail.com"
                  className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition-colors duration-200 transform hover:scale-105"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-lg text-white">
              <h4 className="text-xl font-bold mb-2">Ready to collaborate?</h4>
              <p className="mb-4">
                I'm always open to discussing new opportunities, interesting projects, or just connecting with fellow developers.
              </p>
              <a
                href="mailto:umangkumarravi123@gmail.com"
                className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium inline-block"
              >
                Send me an email
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 font-medium"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;