import network from "../network";
import React, { useRef, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  LoginPageContainer,
  LoginFormContainer,
  InnerLoginFormContainer,
} from "../styledComponents/loginpage";
import { Input, Button , Error} from "../styledComponents/global";
// import { Button, TextField, InputAdornment } from "@material-ui/core";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import LockIcon from "@material-ui/icons/Lock";
import { User } from "../context";
function LoginPage() {
  const location = useHistory();

  const [isError,setIsError] = useState(false);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const gUser = useContext(User);

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
      setIsError(true)
    }
  };
  return (
    <LoginPageContainer>
      <LoginFormContainer>
        <InnerLoginFormContainer>
          <Input ref={usernameRef} placeholder="מספר אישי"></Input>
          <Input type="password" ref={passwordRef} placeholder="סיסמא"></Input>
          <Button onClick={() => handleLogin()}>התחבר</Button>
          
            <Error>{isError && '*אחד או יותר מהשדות אינם נכונים'}</Error>
          
        </InnerLoginFormContainer>
      </LoginFormContainer>
    </LoginPageContainer>
  );
}

export default LoginPage;
