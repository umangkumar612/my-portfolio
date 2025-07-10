import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code size={20} />
            <span className="text-lg font-semibold">Umang Kumar</span>
          </div>
          <p className="text-gray-400 mb-4">
            Computer Science And Engineering Student | Full Stack Web Developer | Problem Solver
          </p>
          <div className="flex items-center justify-center gap-1 text-gray-400">
            <span>Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>using React & Tailwind CSS</span>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            © 2025 Umang Kumar. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;