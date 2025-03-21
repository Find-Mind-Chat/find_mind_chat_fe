import { useState } from 'react';
import SideMenu from '../SideMenu';
import FavoriteFriendList from '../FavoriteFriendList';
import FriendListUnit from '../FriendListUnit';
import '../../styles/FriendList.css';
import '../../styles/SideMenu.css';
import '../../styles/FavoriteFriendList.css';
import NotificationIcon from '../icon/NotificationIcon';

const FriendsList = [
  {
    friendUuid: '8bec82cd-155f-47b4-bf90-15ca818c80d6',
    friendName: '김가민',
    friendProImg: null,
  },
  {
    friendUuid: '8bec82cd-155f-47b4-bf90-15ca818c80d7',
    friendName: '임찬섭',
    friendProImg: null,
  },
  {
    friendUuid: '8bec82cd-155f-47b4-bf90-15ca818c80d8',
    friendName: '박찬성',
    friendProImg: null,
  },
  {
    friendUuid: '8bec82cd-155f-47b4-bf90-15ca818c80d9',
    friendName: '황가묵',
    friendProImg: null,
  },
  {
    friendUuid: '8bec82cd-155f-47b4-bf90-15ca818c80d1',
    friendName: '곽팔창',
    friendProImg: null,
  },
  {
    friendUuid: '8bec82cd-155f-47b4-bf90-15ca818c80d2',
    friendName: '유재석',
    friendProImg: null,
  },
  {
    friendUuid: '8bec82cd-155f-47b4-bf90-15ca818c80d3',
    friendName: '박명수',
    friendProImg: null,
  },
  {
    friendUuid: '8bec82cd-155f-47b4-bf90-15ca818c80d4',
    friendName: '노홍철',
    friendProImg: null,
  },
  {
    friendUuid: '8bec82cd-155f-47b4-bf90-15ca818c80d5',
    friendName: '정형돈',
    friendProImg: null,
  },
  {
    friendUuid: '8bec82cd-155f-47b4-bf90-15ca818c80a3',
    friendName: '정준하',
    friendProImg: null,
  },
  {
    friendUuid: '8bec82cd-155f-47b4-bf90-15ca818c80g6',
    friendName: '김나민',
    friendProImg: null,
  },
  {
    friendUuid: '8bec82cd-155f-47b4-bf90-15ca818c80e6',
    friendName: '김다민',
    friendProImg: null,
  },
];

const FriendList = () => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };
  const filteredFriends = FriendsList.filter((friend) => {
    return friend.friendName.includes(searchKeyword);
  });

  return (
    <div className="friend-list-container">
      <SideMenu />
      <FavoriteFriendList />
      <div className="friend-list-section">
        {/* 헤더 */}
        <div className="header">
          <div className="text-button-wrapper">
            <p className="title">친구</p>
            <button className="add-friend-button">친구 추가하기</button>
          </div>
          <div className="notification">
            <NotificationIcon />
          </div>
        </div>

        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="친구 검색"
            onChange={handleChange}
            value={searchKeyword}
          ></input>
        </div>
        {/* 친구 리스트 */}
        <div className="friend-list-body">
          <FriendListUnit friendList={filteredFriends} />
        </div>
      </div>
    </div>
  );
};

export default FriendList;
