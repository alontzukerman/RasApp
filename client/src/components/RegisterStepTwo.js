import React, { useRef, useState } from "react";
import { Input, Button } from "../styledComponents/global";

function RegisterStepTwo({ newUser, nextStep }) {
  console.log(newUser);
  const [completed, setCompleted] = useState(false);

  const idInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleNext = async () => {
    if (completed)
      return nextStep({
        id: Number(idInputRef.current.value),
        password: passwordInputRef.current.value,
      });

    // const response = await network.get(`/api/plugas/${plugaRef.current.value}`);
    // console.log(response);

    setCompleted(true);
  };
  return (
    <>
      <Input
        ref={idInputRef}
        readOnly={completed ? true : false}
        type="text"
        placeholder="מספר אישי"
      ></Input>
      <Input
        ref={passwordInputRef}
        readOnly={completed ? true : false}
        type="password"
        placeholder="סיסמא"
      ></Input>
      <Button onClick={() => handleNext()}>{completed ? "הבא" : "שמור"}</Button>
    </>
  );
}

export default RegisterStepTwo;
