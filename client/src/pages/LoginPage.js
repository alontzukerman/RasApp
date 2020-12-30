import network from "../network";
import React, { useRef, useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import {
  LoginPageContainer,
  LoginFormContainer,
  InnerLoginFormContainer,
  LoginTitle,
  CircleXXL,
  CircleXL,
  CircleL,
  CircleM,
  CircleS,
} from "../styledComponents/loginpage";
import { Input, Button, Error } from "../styledComponents/global";
import { User, DarkMode } from "../context";
import RassAppLogo_Vertical from '../files/RassAppLogo_Vertical.png' ;

function LoginPage() {
  const location = useHistory();

  const [isError, setIsError] = useState(false);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const gUser = useContext(User);
  const gDarkMode = useContext(DarkMode);

  const handleLogin = async () => {
    try {
      const user = {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      };
      const { data } = await network.post(`/api/auth/login`, user);
      console.log(data);
      gUser.setUser(data);
      location.push("/");
    } catch (e) {
      console.log(e);
      setIsError(true);
    }
  };
  return (
    <LoginPageContainer>
      <CircleXXL />
      <CircleXL />
      <CircleL />
      <CircleM />
      <CircleS />

      <LoginFormContainer>
        <LoginTitle>התחבר</LoginTitle>
        <img src={RassAppLogo_Vertical} alt="Logo" />

        <InnerLoginFormContainer>
          <Input ref={usernameRef} placeholder="מספר אישי"></Input>
          <Input type="password" ref={passwordRef} placeholder="סיסמא"></Input>
          <Button onClick={() => handleLogin()}>התחבר</Button>

          <Error>{isError && "*אחד או יותר מהשדות אינם נכונים"}</Error>
        </InnerLoginFormContainer>
        <Link to="/register">עבור אל הרשמה</Link>
      </LoginFormContainer>
    </LoginPageContainer>
  );
}

export default LoginPage;
