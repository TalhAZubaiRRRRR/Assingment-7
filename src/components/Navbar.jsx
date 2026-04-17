import React from 'react';
import { NavLink } from 'react-router';
import { IoMdHome } from 'react-icons/io';
import { CiClock2 } from 'react-icons/ci';
import { GoGraph } from 'react-icons/go';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">

          {/* Logo */}
          <div className="text-3xl font-bold tracking-tight text-[#1f2937]">
            Keen<span className="text-[#244d3f]">Keeper</span>
          </div>

          
          <div className="flex items-center gap-1 sm:gap-2">
            
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-3 rounded-2xl text-sm font-medium transition-all ${
                  isActive 
                    ? 'bg-[#244d3f] text-white shadow-md' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              <IoMdHome className="text-xl sm:text-2xl" />
              <span className="hidden sm:inline">Home</span>
            </NavLink>

            <NavLink
              to="/timeline"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-3 rounded-2xl text-sm font-medium transition-all ${
                  isActive 
                    ? 'bg-[#244d3f] text-white shadow-md' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              <CiClock2 className="text-xl sm:text-2xl" />
              <span className="hidden sm:inline">Timeline</span>
            </NavLink>

            <NavLink
              to="/chart"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-3 rounded-2xl text-sm font-medium transition-all ${
                  isActive 
                    ? 'bg-[#244d3f] text-white shadow-md' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              <GoGraph className="text-xl sm:text-2xl" />
              <span className="hidden sm:inline">Stats</span>
            </NavLink>

          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;