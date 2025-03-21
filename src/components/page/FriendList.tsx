import SideMenu from '../SideMenu';
import FavoriteFriendList from '../FavoriteFriendList';
import '../../styles/FriendList.css';
import '../../styles/SideMenu.css';
import '../../styles/FavoriteFriendList.css';

const FriendList = () => {
  return (
    <div className="friend-list-container">
      <SideMenu />
      <FavoriteFriendList />
      <div className="friend-list"></div>
    </div>
  );
};

export default FriendList;
