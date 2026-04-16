import { useState } from "react";
import { FriendsContext } from "./FriendsProvider";


const FriendContextProvider = ({children}) => {

    const [friendTimelineBtn , setFriendTimelineBtn] = useState([])

    const friendsData = {

        friendTimelineBtn,
        setFriendTimelineBtn,
        
    }

    return (
        <FriendsContext.Provider value={friendsData}>
            {children}
        </FriendsContext.Provider>
    )
};

export default FriendContextProvider;