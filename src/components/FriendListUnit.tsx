import { FriendListUnitType } from '../types/FreindListUnit';
import '../styles/FriendListUnit.css';
import { useState } from 'react';
import XIcon from './icon/XIcon';
import MessageIcon from './icon/MessageIcon';
import HeartIcon from './icon/HeartIcon';

const FriendListUnit = ({ friendList }: { friendList: FriendListUnitType[] }) => {
  const [modalOpended, setModalOpened] = useState(false);

  return (
    <>
      {modalOpended ? (
        <div className="modal-background">
          <div className="friend-modal">
            <div
              className="close-icon"
              onClick={() => {
                setModalOpened(!modalOpended);
              }}
            >
              <XIcon />
            </div>
            <div className="friend-status-modal">
              <div className="pro-img"></div>
              <div className="modal-tool">
                <div className="modal-button">
                  <MessageIcon />
                  <span>채팅</span>
                </div>
                <div className="modal-button">
                  <HeartIcon />
                  <span>즐겨찾기추가</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <ul className="friend-list">
        {friendList.map((friend: FriendListUnitType, idx) => (
          <li key={idx}>
            <div
              className="friend-info"
              onClick={() => {
                setModalOpened(true);
              }}
            >
              <div className={`friend-img ${friend.friendProImg === '' ? 'img-null' : 'img-not-null'}`}></div>
              <div className="friend-name">{friend.friendName}</div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FriendListUnit;
