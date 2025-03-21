import FriendListUnit from './FriendListUnit';

const FavoriteFriendList = () => {
  const favoriteFriends = [
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
  ];

  return (
    <div className="favorite-friend-container">
      <div className="header">
        <p className="title">친구</p>
      </div>

      <div className="favorite-text-count-wrapper">
        <p className="favorite-text">즐겨찾기</p>
        <p className="favorite-count">{favoriteFriends.length}</p>
      </div>

      <FriendListUnit friendList={favoriteFriends} />
    </div>
  );
};

export default FavoriteFriendList;
