import React, { useEffect, useRef, useState } from "react";
import network from "../network";
import { Input, Button, Select, Error } from "../styledComponents/global";

function RegisterStepThree({ nextStep, newUser }) {
  console.log(newUser);
  const [completed, setCompleted] = useState(false);
  const [isError, setIsError] = useState(false);

  const [ranks, setRanks] = useState([]);

  const firstNameInputRef = useRef(null);
  const lastNameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const phoneNumberInputRef = useRef(null);
  const birthdayInputRef = useRef(null);
  const addressInputRef = useRef(null);
  const draftDateRef = useRef(null);
  const releaseDateRef = useRef(null);
  const rankRef = useRef(null);

  const getRanks = async () => {
    const { data } = await network.get(`/api/register/ranks`);
    setRanks(data);
  };

  useEffect(() => {
    getRanks();
  }, []);
  const handleNext = async () => {
    if (completed)
      return nextStep({
        firstName: firstNameInputRef.current.value,
        lastName: lastNameInputRef.current.value,
        email: emailInputRef.current.value,
        phoneNumber: phoneNumberInputRef.current.value,
        address: addressInputRef.current.value,
        birthday: birthdayInputRef.current.value,
        draftDate: draftDateRef.current.value,
        releaseDate: releaseDateRef.current.value,
        rankId: Number(rankRef.current.value),
      });
    if (
      firstNameInputRef.current.value !== "" &&
      lastNameInputRef.current.value !== "" &&
      emailInputRef.current.value !== "" &&
      phoneNumberInputRef.current.value !== "" &&
      addressInputRef.current.value !== "" &&
      birthdayInputRef.current.value !== "" &&
      draftDateRef.current.value !== "" &&
      releaseDateRef.current.value !== "" &&
      rankRef.current.value !== ""
    )
      setCompleted(true);
    else setIsError(true);
  };
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
      <Input
        ref={birthdayInputRef}
        type="date"
        placeholder="תאריך לידה"
      ></Input>
      <Input ref={draftDateRef} type="date" placeholder="תאריך גיוס"></Input>
      <Input ref={releaseDateRef} type="date" placeholder="תאריך שחרור"></Input>

      <Select ref={rankRef}>
        <option>דרגה</option>
        {ranks.map((rank, i) => {
          return (
            <option value={rank.id} key={i}>
              {rank.rankName}
            </option>
          );
        })}
      </Select>
      <Error>{isError && "וודא שכל השעות מלאים"}</Error>

      <Button onClick={() => handleNext()}>{completed ? "הבא" : "שמור"}</Button>
    </>
  );
}

export default RegisterStepThree;
