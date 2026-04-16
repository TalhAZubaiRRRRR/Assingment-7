import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { PropagateLoader } from 'react-spinners';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/friends.json');
            const data = await res.json();
            setFriends(data.friends);
            setLoading(false);
        };
        fetchData();
    }, []);

    return (
        <div>
            <div className="p-6 max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Friends</h1>

                {loading ? (
                    <div className='flex justify-center items-center h-96'>
                        <PropagateLoader color='#244d3f' />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                        {friends.map((friend) => {
                            let statusColor = '';
                            let statusText = '';

                            if (friend.status === 'overdue') {
                                statusText = 'Overdue';
                                statusColor = 'bg-red-500 text-white';
                            } else if (friend.status === 'almost due') {
                                statusText = 'Almost Due';
                                statusColor = 'bg-orange-500 text-white';
                            } else {
                                statusText = 'On Track';
                                statusColor = 'bg-emerald-500 text-white';
                            }

                            return (
                                <Link 
                                    to={`/friends/${friend.id}`}
                                    key={friend.id}
                                    className="bg-white rounded-3xl shadow-sm hover:shadow-xl duration-300 p-6 flex flex-col items-center text-center border border-gray-100"
                                >
                                    {/* Profile Picture */}
                                    <div className="mb-5">
                                        <img
                                            src={friend.picture}
                                            alt={friend.name}
                                            className="w-28 h-28 rounded-full object-cover ring-4 ring-white shadow-md"
                                        />
                                    </div>

                                    {/* Name */}
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                                        {friend.name}
                                    </h3>

                                    {/* Days ago */}
                                    <p className="text-gray-500 text-sm mb-5">
                                        {friend.days_since_contact}d ago
                                    </p>

                                    
                                    <div className="mb-6 flex gap-2 flex-wrap justify-center">
                                        {friend.tags && friend.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="inline-block bg-emerald-100 text-emerald-700 text-xs px-5 py-1.5 rounded-full font-semibold"
                                            >
                                                {tag.toUpperCase()}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Status Button */}
                                    <div className={`inline-block px-6 py-2 rounded-full text-sm font-bold ${statusColor}`}>
                                        {statusText}
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Friends;