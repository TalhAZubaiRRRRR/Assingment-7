import React, { useContext, useEffect, useState } from 'react';
import { FaVideo } from 'react-icons/fa';
import { IoIosArchive, IoMdText } from 'react-icons/io';
import { IoVideocamOutline } from 'react-icons/io5';
import { LuPhoneCall } from 'react-icons/lu';
import { MdDelete } from 'react-icons/md';
import { VscCopilotSnooze } from 'react-icons/vsc';
import { useParams } from 'react-router';
import { ClimbingBoxLoader, PropagateLoader } from 'react-spinners';
import { FriendsContext } from '../../context/FriendsProvider';

const FriendDetails = () => {
    
    const { id } = useParams();
    
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/friends.json');
            const data = await res.json();
            const allFriends = data.friends;
            setFriends(allFriends);
        };
        fetchData();
    }, [id]);

    // Find the friend
    const currentFriend = friends.find((friend) => friend.id === Number(id));


    
    const {friendTimelineBtn , setFriendTimelineBtn} = useContext(FriendsContext)


    // Show loading while data is not ready
    if (!currentFriend) {
        return <div className="text-center h-[70vh] flex items-center text-4xl font-bold text-white bg-emerald-700 italic justify-center">
            <div>
                <p className=''>Loading Friend Data... <br />
                Please Check Your Searching
                <div className='flex justify-center items-center  '>
                <ClimbingBoxLoader color='#ffffff'/>

                </div>
                
                </p>
            </div>
        </div>;
    }

    const handleFriendBtn = (type) => {

        let iconComponent;

    if (type === "Call") {
        iconComponent = <LuPhoneCall />;
    } else if (type === "Text") {
        iconComponent = <IoMdText />;
    } else if (type === "Video Call") {
        iconComponent = <IoVideocamOutline />;
    }
        
        const newEntry = {
            id: Date.now(),
            name:currentFriend.name,
            type:type,
            icon: iconComponent
        }
        setFriendTimelineBtn([...friendTimelineBtn,newEntry,currentFriend])
    }
    console.log(friendTimelineBtn)

    

    return (
        <div className="max-w-5xl mx-auto p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Left Column - Profile Info */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-3xl shadow p-6">
                        <img 
                            src={currentFriend.picture} 
                            alt={currentFriend.name}
                            className="w-32 h-32 rounded-2xl mx-auto object-cover mb-4"
                        />
                        <h2 className="text-2xl font-bold text-center mb-1">{currentFriend.name}</h2>
                        
                        <div className="flex flex-col  justify-center gap-2 mb-4 items-center">
                            <span className=" bg-red-500 text-white text-xs px-4 py-1 rounded-full w-[96px] inline-block text-center font-semibold">
                                {currentFriend.status}
                            </span>
                            <span className="bg-emerald-100 text-emerald-700 text-xs px-4 py-1 rounded-full w-[80px] text-center">
                                {currentFriend.tags?.[0] || 'Friend'}
                            </span>
                        </div>

                        <p className="text-center text-gray-600 text-sm italic mb-6">
                            "{currentFriend.bio}"
                        </p>

                        <div className="space-y-3 text-sm ">
                            <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-100 rounded-2xl shadow  justify-center">
                                <VscCopilotSnooze/> Snooze 2 Weeks
                            </button>
                            <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-100 rounded-2xl  shadow  justify-center">
                                <IoIosArchive/> Archive
                            </button>
                            <button className="w-full flex items-center gap-3 p-3 text-red-500 hover:bg-red-50 rounded-2xl shadow justify-center">
                                <MdDelete/> Delete
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Column - Details & Actions */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Stats Cards */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white rounded-3xl p-5 text-center shadow">
                            <p className="text-3xl font-bold text-gray-800">{currentFriend.days_since_contact}</p>
                            <p className="text-sm text-gray-500">Days Since Contact</p>
                        </div>
                        <div className="bg-white rounded-3xl p-5 text-center shadow">
                            <p className="text-3xl font-bold text-gray-800">{currentFriend.goal}</p>
                            <p className="text-sm text-gray-500">Goal (Days)</p>
                        </div>
                        <div className="bg-white rounded-3xl p-5 text-center shadow">
                            <p className="text-3xl font-bold text-gray-800">{currentFriend.next_due_date}</p>
                            <p className="text-sm text-gray-500">Next Due</p>
                        </div>
                    </div>

                    {/* Relationship Goal */}
                    <div className="bg-white rounded-3xl p-5 mt-5 shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="font-semibold text-lg">Relationship Goal</h3>
                                <p className="text-gray-600 font-medium">Connect every 
                                    <span className='ml-1 font-bold text-black'>
                                        {currentFriend.goal} days
                                    </span>
                                </p>
                            </div>
                            <button className="btn btn-outline ">
                                Edit
                            </button>
                        </div>
                    </div>

                    {/* Quick Check-In */}
                    <div className="bg-white rounded-3xl p-6 shadow">
                        <h3 className="font-semibold text-lg mb-5">Quick Check-In</h3>
                        <div className="grid grid-cols-3 gap-4">
                            <button
                            onClick={() => handleFriendBtn("Call")}
                             className="flex flex-col items-center gap-2 p-6 hover:bg-gray-50 rounded-2xl shadow shadow-gray-300">
                                <LuPhoneCall/> Call
                            </button>
                            <button 
                            onClick={() => handleFriendBtn("Text")}
                            className="flex flex-col items-center gap-2 p-6 hover:bg-gray-50 rounded-2xl shadow shadow-gray-300 ">
                                <IoMdText/> Text
                            </button>
                            <button
                            onClick={() => handleFriendBtn("Video Call")}
                             className="flex flex-col items-center gap-2 p-6 hover:bg-gray-50 rounded-2xl shadow shadow-gray-300">
                                <IoVideocamOutline/> Video
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;