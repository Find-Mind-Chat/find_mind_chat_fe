import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import LoginPage from './components/page/LoginPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
