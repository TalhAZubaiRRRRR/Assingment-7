import { FriendsContext } from "./FriendsProvider";


const FriendContextProvider = ({children}) => {

    const friend = {
        name: "tallha",
        age:20
    }

    return <FriendsContext.Provider value={friend}>{children}</FriendsContext.Provider>

};

export default FriendContextProvider;