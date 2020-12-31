import React, { useRef, useState } from "react";
import network from "../network";
import { Button, Input, Error } from "../styledComponents/global";

function RegisterStepOne({ nextStep }) {
  const [completed, setCompleted] = useState(false);
  const [isError, setIsError] = useState(false);
  const plugaIdInputRef = useRef(null);

  const handleNext = async () => {
    if (completed)
      return nextStep({ plugaId: Number(plugaIdInputRef.current.value) });
    if (plugaIdInputRef.current.value === "") return;
    const { data } = await network.get(
      `/api/auth/valid-pluga/${plugaIdInputRef.current.value}`
    );
    data.valid ? setCompleted(true) : setIsError(true);
  };
  return (
    <>
      <Input
        ref={plugaIdInputRef}
        readOnly={completed ? true : false}
        type="text"
        placeholder="הכנס קוד פלוגה"
      ></Input>
      <Error>{isError && "לא קיימת פלוגה"}</Error>
      <Button onClick={() => handleNext()}>{completed ? "הבא" : "שמור"}</Button>
    </>
  );
}

export default RegisterStepOne;
