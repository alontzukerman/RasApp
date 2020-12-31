import network from "../network";
import React, { useRef, useContext, useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import {
  RegisterPageContainer,
  RegisterFormContainer,
  InnerRegisterFormContainer,
  RegisterTitle,
  CircleXXL,
  CircleXL,
  CircleL,
  CircleM,
  CircleS,
} from "../styledComponents/registerpage";
import { Input, Button, Error } from "../styledComponents/global";
import { User, DarkMode } from "../context";
import RegisterStepOne from "../components/RegisterStepOne";
import RegisterStepTwo from "../components/RegisterStepTwo";
import RegisterStepThree from "../components/RegisterStepThree";
import RegisterStepFour from "../components/RegisterStepFour";
function RegisterPage() {
  const [registerStepIndex, setRegisterStepIndex] = useState(0);
  const [newUser, setNewUser] = useState({});

  useEffect(() => {
    setRegisterStepIndex(0);
  }, []);

  const handleNextStep = (attribute, i) => {
    setNewUser({ ...newUser, ...attribute });
    setRegisterStepIndex(i);
  };

  const registerOne = () => {
    return (
      <RegisterStepOne nextStep={(plugaId) => handleNextStep(plugaId, 1)} />
    );
  };
  const registerTwo = () => {
    return (
      <RegisterStepTwo
        newUser={newUser}
        nextStep={(currentNewUser) => handleNextStep(currentNewUser, 2)}
      />
    );
  };
  const registerThree = () => {
    return (
      <RegisterStepThree
        newUser={newUser}
        nextStep={(currentNewUser) => handleNextStep(currentNewUser, 3)}
      />
    );
  };
  const registerFour = () => {
    return <RegisterStepFour newUser={newUser} />;
  };
  const registerSteps = [registerOne, registerTwo, registerThree, registerFour];
  return (
    <RegisterPageContainer>
      <CircleXXL />
      <CircleXL />
      <CircleL />
      <CircleM />
      <CircleS />
      <RegisterFormContainer>
        <RegisterTitle>הרשמה</RegisterTitle>

        <InnerRegisterFormContainer>
          {registerSteps[registerStepIndex]()}
        </InnerRegisterFormContainer>
        <Link to="login">עבור אל התחברות</Link>
      </RegisterFormContainer>
    </RegisterPageContainer>
  );
}

export default RegisterPage;
