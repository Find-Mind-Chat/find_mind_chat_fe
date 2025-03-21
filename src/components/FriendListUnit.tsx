import { FriendListUnitType } from '../types/FreindListUnit';
import '../styles/FriendListUnit.css';

const FriendListUnit = ({ friendList }: { friendList: FriendListUnitType[] }) => {
  return (
    <ul className="friend-list">
      {friendList.map((friend: FriendListUnitType, idx) => (
        <li key={idx}>
          <div className="friend-info">
            <div className={`friend-img ${friend.friendProImg === '' ? 'img-null' : 'img-not-null'}`}></div>
            <div className="friend-name">{friend.friendName}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FriendListUnit;
