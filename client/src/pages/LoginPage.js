import network from "../network";
import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { PageContainer, FormContainer } from "../styledComponents/containers";
import { Input } from "../styledComponents/elements";
import { Button, TextField, InputAdornment } from "@material-ui/core";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import LockIcon from "@material-ui/icons/Lock";
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
      const { data } = await network.post(`/api/auth/login`, user);
      console.log(data);
      localStorage.setItem("refreshToken", data.refreshToken);
      localStorage.setItem("accessToken", data.accessToken);
      history.push("/");
    } catch (e) {
      console.log("err", e);
    }
  };
  return (
    <PageContainer>
      <FormContainer>
        {/* <TextField inputRef={usernameRef} placeholder="מספר אישי"></TextField> */}
        {/* <TextField ref={passwordRef} placeholder="סיסמא"></TextField> */}
        <TextField
          // className={classes.margin}
          inputRef={usernameRef}
          placeholder="מספר אישי"
          id="input-with-icon-textfield"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountBoxIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          type="password"
          inputRef={passwordRef}
          placeholder="סיסמא"
          id="input-with-icon-textfield"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button color="primary" variant="outlined" onClick={() => handleLogin()}>
          login
        </Button>
      </FormContainer>
    </PageContainer>
  );
}

export default LoginPage;
