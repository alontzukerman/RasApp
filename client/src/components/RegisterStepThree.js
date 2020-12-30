import React, { useRef } from "react";
import { Input, Button } from "../styledComponents/global";

function RegisterStepThree({ newUser }) {
  console.log(newUser);

  const firstNameInputRef = useRef(null);
  const lastNameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const phoneNumberInputRef = useRef(null);
  const birthdayInputRef = useRef(null);
  const addressInputRef = useRef(null);
  const draftDateRef = useRef(null);
  const releaseDateRef = useRef(null);
  const platoonRef = useRef(null);
  const classRef = useRef(null);
  const rankRef = useRef(null);
  const pakalRef = useRef(null);
  return (
    <>
      <Input ref={firstNameInputRef} type="text" placeholder="שם פרטי"></Input>
      <Input ref={lastNameInputRef} type="text" placeholder="שם משפחה"></Input>
      <Input ref={emailInputRef} type="email" placeholder="אימייל"></Input>
      <Input
        ref={phoneNumberInputRef}
        type="tel"
        pattern="0[0-9]{2}-[0-9]{7}"
        placeholder="מספר טלפון"
      ></Input>
      <Input ref={addressInputRef} type="text" placeholder="כתובת"></Input>
      <Input ref={birthdayInputRef} type="date" placeholder="תאריך לידה"></Input>
      <Input ref={draftDateRef} type="date" placeholder="תאריך גיוס"></Input>
      <Input ref={releaseDateRef} type="date" placeholder="תאריך שחרור"></Input>
      <Button>צור</Button>

    </>
  );
}

export default RegisterStepThree;
