import css from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline, }) => {
    
    return <div className="firend-item">
        <img src={avatar} alt={name} width="48" />
        <p>{name}</p>
        <p className={[css.status] [isOnline ? "{css.online}" : "css.offline"]}>
            {isOnline ? "Online" : "Offline"}
        </p>
    </div>
};


export default FriendListItem;