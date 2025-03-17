import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import '../../styles/LoginPage.css';
import MainLogo from '../../assets/main-logo.svg';
import CharacterCactus from '../../assets/login-character.svg';

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID as string;

const LoginPage = () => {
  const navigate = useNavigate();
  const handleLoginSuccess = (credentialResponse: CredentialResponse) => {
    if (credentialResponse.credential) {
      console.log('✅ JWT Token:', credentialResponse.credential);
      // toto : fetch jwt token to server and get new access token
      // todo : save access token to zustand store and local storage
      navigate('/');
    }
  };

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <div className="login-container">
        <div className="container-left-area">
          <div className="logo-box">
            <img src={MainLogo} alt="main-logo" className="responsive-img" width={400} height={400} />
          </div>
          <div className="login-form">
            <h2 className="login-text">Log In</h2>
            <div className="google-login-wrapper">
              <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={() => console.log('구글 로그인 에러')}
                size="large"
                useOneTap
              />
            </div>
          </div>
        </div>

        <div className="container-right-area">
          <div className="sky-background"></div>
          <div className="character-cactus">
            <img src={CharacterCactus} alt="character-cactus" className="responsive-img" width={600} height={600} />
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default LoginPage;
