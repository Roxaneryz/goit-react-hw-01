import css from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline, }) => {
    
    return (
        <div className={css.friendContainer}>
        <img src={avatar} alt={name} width="48" />
        <p>{name}</p>
        <p
          className={[css.status, isOnline ? css.online : css.offline].join(
            " "
          )}
        >
          {isOnline ? "Online" : "Offline"}
        </p>
        {/* <p className={[css.status] [isOnline ? "{css.online}" : "css.offline"]}>
            {isOnline ? "Online" : "Offline"} */}
      </div>
    );
};


export default FriendListItem;