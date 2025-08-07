import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        {/* Brand Name with Icon */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <Code size={20} />
          <span className="text-xl font-bold tracking-wide">Umang Kumar</span>
        </div>

        {/* Tagline */}
        <p className="text-gray-400 text-sm sm:text-base mb-4 max-w-xl mx-auto">
          Final Year CSE Student | Full Stack Developer (MERN Stack) | Passionate Problem Solver
        </p>

        {/* Signature line */}
        <div className="flex items-center justify-center gap-1 text-gray-400 text-sm">
          <span>Crafted with</span>
          <Heart size={16} className="text-red-500 animate-pulse" />
          <span>React & Tailwind CSS</span>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Umang Kumar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
