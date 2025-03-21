import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/page/LoginPage';
import FriendList from './components/page/FriendList';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FriendList />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
