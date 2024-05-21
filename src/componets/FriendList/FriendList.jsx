// import style from "./FriendsList.module.css"
import FriendListItem from "./FriendsListItem.jsx"


const FriendList = ({ friends }) => {


    return (
        <ul className="friend-container">
          {friends.map((friend) => (
            <li key={friend.id}>
              <FriendListItem
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
              />
            </li>
          ))}
        </ul>
      
    );
}
        

export default FriendList;