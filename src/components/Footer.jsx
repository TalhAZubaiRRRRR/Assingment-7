import React from 'react';
import { FaGithub, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1a3c35] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        
        
        <div className="flex flex-col items-center text-center">
          
          
          <div className="text-4xl font-bold mb-3">
            Keen<span className="text-emerald-400">Keeper</span>
          </div>

          
          <p className="text-gray-300 max-w-md mb-8 text-sm leading-relaxed">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>

          
          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Social Links</p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center">
                <FaGithub className="text-xl" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10  rounded-full flex items-center justify-center">
                <FaTwitter className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="" className="">Privacy Policy</a>
            <a href="" className="">Terms of Service</a>
            <a href="" className="">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;