import React from 'react';

const BodyPart = () => {
    return (
        <div className="mb-4 bg-gray-50 py-8 px-4 ">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Friends to keep close in your life
          </h1>
          <p className="text-gray-600 max-w-md mx-auto">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>
        </div>

        {/* Add Friend Button */}
        <div className="flex justify-center mb-12 ">
          <button className="flex items-center gap-2 bg-emerald-700  text-white font-medium px-6 py-3 rounded-xl shadow-md cursor-pointer">
            <span className="text-xl leading-none">+</span>
            <span>Add a Friend</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-sm p-6 text-center border border-gray-100 hover:shadow-md">
            <div className="text-5xl font-bold text-gray-900 mb-1">10</div>
            <div className="text-gray-500 text-sm font-medium">Total Friends</div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-sm p-6 text-center border border-gray-100 hover:shadow-md ">
            <div className="text-5xl font-bold text-gray-900 mb-1">3</div>
            <div className="text-gray-500 text-sm font-medium">On Track</div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-sm p-6 text-center border border-gray-100 hover:shadow-md ">
            <div className="text-5xl font-bold text-gray-900 mb-1">6</div>
            <div className="text-gray-500 text-sm font-medium">Need Attention</div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl shadow-sm p-6 text-center border border-gray-100 hover:shadow-md ">
            <div className="text-5xl font-bold text-gray-900 mb-1">12</div>
            <div className="text-gray-500 text-sm font-medium">Interactions This Month</div>
          </div>

        </div>

      </div>
    </div>
    );
};

export default BodyPart;