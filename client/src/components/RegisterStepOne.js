import React, { useRef, useState } from "react";
import network from "../network";
import { Button, Input } from "../styledComponents/global";

function RegisterStepOne({ nextStep }) {
  const [completed, setCompleted] = useState(false);
  const plugaIdInputRef = useRef(null);

  const handleNext = async () => {
    if (completed) return nextStep({ plugaId: plugaIdInputRef.current.value });

    const response = await network.get(
      `/api/plugas/${plugaIdInputRef.current.value}`
    );
    console.log(response);

    setCompleted(true);
  };
  return (
    <>
      <Input
        ref={plugaIdInputRef}
        readOnly={completed ? true : false}
        type="text"
        placeholder="הכנס קוד פלוגה"
      ></Input>
      <Button onClick={() => handleNext()}>{completed ? "הבא" : "שמור"}</Button>
    </>
  );
}

export default RegisterStepOne;
