import React, { useEffect } from 'react';
import { useState } from 'react';

const Friends = () => {
    const [friends, setFriends] = useState([]);


    useEffect(()=> {


        const fetchData = async () => {
            const res = await fetch('/friends.json')
            const data = await res.json()
            const friends = data.friends
            
            setFriends(friends)
        }
        fetchData()
    },[])

    console.log(friends)
    
    return (
<div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Friends</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {friends.map((friend) => {
        
          let statusColor = '';
          let statusText = friend.status === 'overdue' ? 'Overdue' :
                          friend.status === 'almost due' ? 'Almost Due' : 'On Track';

          if (friend.status === 'overdue') statusColor = 'bg-red-500 text-white';
          else if (friend.status === 'almost due') statusColor = 'bg-orange-500 text-white';
          else statusColor = 'bg-emerald-500 text-white';

          return (
            <div 
              key={friend.id}
              className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center border border-gray-100"
            >
              
              <div className="mb-5">
                <img 
                  src={friend.picture} 
                  alt={friend.name}
                  className="w-28 h-28 rounded-full object-cover ring-4 ring-white shadow-md"
                />
              </div>

              
              <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                {friend.name}
              </h3>

              
              <p className="text-gray-500 text-sm mb-5">
                {friend.days_since_contact}d ago
              </p>

              
              <div className="mb-4">
                <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-medium px-5 py-1.5 rounded-full font-semibold">
                  {friend.tags[0]}
                </span>
              </div>

              
              <div className={`inline-block px-6 py-2 rounded-full text-sm  font-bold ${statusColor}`}>
                {statusText}
              </div>
            </div>
          );
        })}
      </div>
    </div>
    );
};

export default Friends;