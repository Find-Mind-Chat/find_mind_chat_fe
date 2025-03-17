// import { CredentialResponse, useGoogleLogin} from "@react-oauth/google";
// import { useNavigate } from "react-router-dom";

// const CustomGoogleLogin = () =>{
//     const navigate = useNavigate();
//   const handleLoginSuccess = (credentialResponse: CredentialResponse) => {
//     if (credentialResponse.credential) {
//       console.log('✅ JWT Token:', credentialResponse.credential);
//       // toto : fetch jwt token to server and get new access token
//       // todo : save access token to zustand store and local storage
//       navigate('/');
//     }
//   };

//     const googleLogin = useGoogleLogin({
//         onSuccess: handleLoginSuccess,
//         onError: () => console.log('구글 로그인 에러'),
//     });
// }

// export default CustomGoogleLogin;
