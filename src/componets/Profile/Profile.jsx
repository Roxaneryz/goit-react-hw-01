


import styles from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.profileHeader}>
        <img
          className={styles.profileImage}
          src={
            image || "https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          }
          alt="User avatar"
        />
        <p className={styles.profileDetails}>{name}</p>
        <p className={styles.profileDetails}>@{tag}</p>
        <p className={styles.profileDetails}>{location}</p>
      </div>
      <ul className={styles.profileStats}>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};


export default Profile;

