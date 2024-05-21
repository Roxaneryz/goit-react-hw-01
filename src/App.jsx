import Profile from "./componets/Profile/Profile";
import userData from "../src/data/userData.json";
import friends from "../src/data/friends.json";
import FriendList from "./componets/FriendList/FriendList";
import transactions from "./data/transactions.json";
import TransactionHistory from "./componets/TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};


export default App;
