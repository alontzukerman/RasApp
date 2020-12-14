import network from '../network';
import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

function LoginPage() {
    let history = useHistory();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const handleLogin = async () => {
    try {
      const user = {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      };
      const {data} = await network.post(`/api/auth/login`, user);
      console.log(data);
      localStorage.setItem('refreshToken',data.refreshToken);
      localStorage.setItem('accessToken',data.accessToken);
      history.push('/')
    } catch (e) {
        console.log('err',e)
    }
  };
  return (
    <div>
      <input ref={usernameRef} placeholder="מספר אישי"></input>
      <input ref={passwordRef} placeholder="סיסמא"></input>
      <button onClick={() => handleLogin()}>login</button>
    </div>
  );
}

export default LoginPage;
