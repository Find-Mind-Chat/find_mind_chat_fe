import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import App from './App';
import LoginPage from './components/page/LoginPage';
import FreindList from './components/page/FreindList';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FreindList />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
