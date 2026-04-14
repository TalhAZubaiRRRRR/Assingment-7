import React from 'react';
import { Link } from 'react-router';
import { IoMdHome } from 'react-icons/io';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#1a3c35] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        
        <h1 className="text-[120px] font-bold text-white leading-none mb-4">404</h1>

        <h2 className="text-3xl font-semibold text-white mb-3">Page Not Found</h2>
        
        <p className="text-gray-300 text-lg mb-10">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        
        <Link to="/">
          <button className="items-center gap-3 bg-white text-[#1a3c35] px-8 py-4 rounded-2xl text-lg font-medium hover:bg-gray-300 cursor-pointer inline-flex"><IoMdHome className="text-2xl" />
          Back to Home
          </button>
        </Link>

      </div>
    </div>
  );
};

export default NotFound;