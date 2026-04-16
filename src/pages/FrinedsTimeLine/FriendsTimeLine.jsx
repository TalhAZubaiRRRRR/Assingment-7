import React, { useContext, useState } from 'react';
import { FriendsContext } from '../../context/FriendsProvider';

const FriendsTimeLine = () => {
    const { friendTimelineBtn } = useContext(FriendsContext);
    const [filter, setFilter] = useState('All');

    const filteredActivities = friendTimelineBtn.filter(item => {
        if (filter === 'All') return true;
        if (filter === 'Calls') return item.type === 'Call';
        if (filter === 'Text') return item.type === 'Text';
        if (filter === 'Video Call') return item.type === 'Video Call';
        return true;
    });

    return (
        <div className='max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>

           
            <p className='font-bold text-2xl sm:text-3xl lg:text-4xl mb-6 sm:mb-8'>
                Timeline
            </p>

           
            <div className="mb-6 sm:mb-8">
                <div className="relative">
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="w-full bg-white border border-gray-300 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                    >
                        <option value="All">All Activities</option>
                        <option value="Calls">Calls</option>
                        <option value="Text">Text</option>
                        <option value="Video Call">Video Call</option>
                    </select>
                </div>
            </div>

            
            <div className="space-y-3 sm:space-y-4">
                {filteredActivities.length > 0 ? (
                    filteredActivities.map((item,index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 flex items-start gap-3 sm:gap-4 shadow-sm border border-gray-300 hover:shadow-md"
                        >
                            {/* Icon */}
                            <div className="text-2xl sm:text-3xl md:text-4xl mt-1">
                                {item.icon}
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-sm sm:text-base md:text-lg text-gray-900 leading-tight">
                                    {item.type} with <span className="text-gray-500">{item.name}</span>
                                </h3>

                                <p className="text-gray-500 text-xs sm:text-sm mt-1">
                                    {item.date}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-10 sm:py-16 text-gray-500 text-sm sm:text-base lg:text-lg">
                        No activities yet.<br />
                        Click Call, Text or Video from friend details.
                    </div>
                )}
            </div>

        </div>
    );
};

export default FriendsTimeLine;