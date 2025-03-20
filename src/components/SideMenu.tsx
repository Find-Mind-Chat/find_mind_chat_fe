import { useState } from 'react';
import '../styles/SideMenu.css';
import MainLogo from './icon/MainLogo';
import HomeLogo from './icon/HomeLogo';
import DoubleArrowIcon from './icon/DoubleArrowIcon';
import { Link, useLocation } from 'react-router-dom';
import HumanIcon from './icon/HumanIcon';
import MessageIcon from './icon/MessageIcon';
import LogoutIcon from './icon/LogoutIcon';

const SideMenu = () => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const location = useLocation();

  return (
    <div className={`side-menu-container ${openSideMenu ? 'open' : ''}`}>
      {/* 오픈버튼 */}
      <div className="open-button-box">
        <div
          className="open-button"
          onClick={() => {
            setOpenSideMenu(!openSideMenu);
          }}
        >
          <DoubleArrowIcon />
        </div>
      </div>
      {/* 로고박스 */}
      <Link to="/">
        <div className="logo-box">
          <div className="logo">{openSideMenu ? <MainLogo /> : <HomeLogo />}</div>
        </div>
      </Link>

      {/* 메뉴박스 */}
      <div className="menu-box">
        <Link to="/" className="menu-link">
          <button className="menu-button adress-book">
            <HumanIcon fill={location.pathname === '/' ? '#615ef0' : '#000'} />
          </button>
          <p className="menu-text">친구</p>
        </Link>

        <Link to="/message" className="menu-link">
          <button className="menu-button message-list">
            <MessageIcon fill={location.pathname === '/message' ? '#615ef0' : '#000'} />
          </button>
          <p className="menu-text">채팅</p>
        </Link>
      </div>

      {/* 로그아웃 */}
      <div className="logout-box">
        <button className="logout-button">
          <LogoutIcon />
        </button>
        <p className="logout-text">로그아웃</p>
      </div>
    </div>
  );
};

export default SideMenu;
