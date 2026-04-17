import React, { useContext, useEffect, useState } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { FriendsContext } from '../../context/FriendsProvider';

const FriendsChart = () => {
    const { friendTimelineBtn } = useContext(FriendsContext)

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/friends.json');
            const data = await res.json();
            const allFriends = data.friends;
            setFriends(allFriends);
        };
        fetchData();
    }, []);
    
    const callCount = friendTimelineBtn.filter(item => item.type === 'Call').length
    const textCount = friendTimelineBtn.filter(item => item.type === "Text").length;
    const videoCount = friendTimelineBtn.filter(item => item.type === "Video Call").length;


    const data = [

        { name: 'Call', value: callCount, fill: '#047857' },
        { name: 'Text', value: textCount, fill: '#800080' },
        { name: 'Video', value: videoCount, fill: '#10B981' },
    ];
    return (
        <div className=''>
            <div className=''>

                <h1 className='text-4xl font-semibold p-14'>Friendship Analytics</h1>

                <div className='my-10 shadow p-10 rounded-md border border-gray-300 container mx-auto'>
                    <p className='pl-22 mb-12 text-xl'>By Interaction Type</p>
                    <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1, margin: "auto", }} responsive>
                        <Pie
                            data={data}
                            innerRadius="80%"
                            outerRadius="100%"
                            
                            cornerRadius="50%"
                            fill="#8884d8"
                            
                            paddingAngle={5}
                            dataKey="value"
                            isAnimationActive={true}

                        />
                        <Legend />
                        <Tooltip />
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default FriendsChart;