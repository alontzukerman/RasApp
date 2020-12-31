import React, { useRef, useState } from "react";
import network from "../network";
import { Input, Button , Error } from "../styledComponents/global";

function RegisterStepTwo({ newUser, nextStep }) {
  console.log(newUser);
  const [completed, setCompleted] = useState(false);
  const [isError, setIsError] = useState(false);

  const idInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleNext = async () => {
    if (completed)
      return nextStep({
        id: Number(idInputRef.current.value),
        password: passwordInputRef.current.value,
      });
    if (
      idInputRef.current.value === "" ||
      passwordInputRef.current.value === ""
    )
      return;
    const {data} = await network.get(
      `/api/auth/valid-id/${idInputRef.current.value}`
    );
    data.valid ? setCompleted(true) : setIsError(true);
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
      <Error>{isError && "הקפד להזין פרטים נכונים"}</Error>

      <Button onClick={() => handleNext()}>{completed ? "הבא" : "שמור"}</Button>
    </>
  );
}

export default RegisterStepTwo;
