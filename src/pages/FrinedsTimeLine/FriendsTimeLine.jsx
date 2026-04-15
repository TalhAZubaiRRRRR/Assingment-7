import React, { useContext } from 'react';
import { FriendsContext } from '../../context/FriendsProvider';

const FriendsTimeLine = () => {
    const FriendsContextData = useContext(FriendsContext)
    console.log(FriendsContextData)
};

export default FriendsTimeLine;