import React, { useEffect, useRef, useState } from "react";
import network from "../network";
import {
  AddSoldierContainer,
  AddSoldierFormContainer,
  InputForm,
  DivForm,
  SelectForm,
  ButtonsForm,
  ButtonOpenForm,
  ButtonSubmitForm,
  ButtonCancelForm,
} from "../styledComponents/soldierspage";
import { Error } from "../styledComponents/global";
import CreateIcon from "@material-ui/icons/Create";
import CloseIcon from "@material-ui/icons/Close";
import SendIcon from "@material-ui/icons/Send";
function AddSoldierForm() {
  const [open, setOpen] = useState(false);
  const [isError,setIsError] = useState(false);
  const [myPlatoons, setPlatoons] = useState([]);
  const [myClasses, setClasses] = useState([]);
  const [ranks, setRanks] = useState([]);
  const [pakals, setPakals] = useState([]);

  const idInputRef = useRef(null);
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
  const getPlatoons = async () => {
    const { data } = await network.get(`/api/platoons`);
    setPlatoons(data);
  };
  const getClasses = async () => {
    const { data } = await network.get(`/api/classes`);
    setClasses(data);
  };
  const getRanks = async () => {
    const { data } = await network.get(`/api/ranks`);
    setRanks(data);
  };
  const getPakals = async () => {
    const { data } = await network.get(`/api/pakals`);
    setPakals(data);
  };

  const createSoldier = async () => {
    if (
      idInputRef.current.value !== "" &&
      firstNameInputRef.current.value !== "" &&
      lastNameInputRef.current.value !== "" &&
      phoneNumberInputRef.current.value !== "" &&
      birthdayInputRef.current.value !== "" &&
      addressInputRef.current.value !== "" &&
      platoonRef.current.value !== "" &&
      rankRef.current.value !== "" &&
      draftDateRef.current.value !== "" &&
      releaseDateRef.current.value !== ""
    ) {
      let newSoldier = {
        id: idInputRef.current.value,
        firstName: firstNameInputRef.current.value,
        lastName: lastNameInputRef.current.value,
        email: emailInputRef.current.value,
        phoneNumber: phoneNumberInputRef.current.value,
        birthday: birthdayInputRef.current.value,
        address: addressInputRef.current.value,
        platoonId: platoonRef.current.value,
        classId: classRef.current.value,
        rankId: rankRef.current.value,
        pakalId: pakalRef.current.value,
        draftDate: draftDateRef.current.value,
        releaseDate: releaseDateRef.current.value,
      };
      if (newSoldier.email === "") newSoldier.email = null;
      if (newSoldier.pakalId === "") newSoldier.pakalId = null;
      const response = await network.post(`/api/soldiers`, newSoldier);
    } else {
      setIsError(true);
    }
  };
  useEffect(() => {
    getPlatoons();
    getClasses();
    getRanks();
    getPakals();
  }, []);

  const handleClick = (bool) => {
    console.log(bool);
    if (!bool) return setOpen(false);
    createSoldier();
  };
  return (
    <AddSoldierContainer open={open}>
      <AddSoldierFormContainer>
        <DivForm>
          {"מספר אישי *"}
          <InputForm ref={idInputRef} />
        </DivForm>
        <DivForm>
          {"שם פרטי *"}
          <InputForm ref={firstNameInputRef} type="text" />
        </DivForm>
        <DivForm>
          {"שם משפחה *"}
          <InputForm ref={lastNameInputRef} type="text" />
        </DivForm>
        <DivForm>
          {"אימייל"}
          <InputForm ref={emailInputRef} type="email" value={null} />
        </DivForm>
        <DivForm>
          {"מספר טלפון *"}
          <InputForm
            ref={phoneNumberInputRef}
            type="tel"
            pattern="0[0-9]{2}-[0-9]{7}"
          />
        </DivForm>
        <DivForm>
          {"תאריך לידה *"}
          <InputForm ref={birthdayInputRef} type="date" />
        </DivForm>
        <DivForm>
          {"כתובת *"}
          <InputForm ref={addressInputRef} type="address" />
        </DivForm>
        <DivForm>
          {"תאריך גיוס *"}
          <InputForm ref={draftDateRef} type="date" />
        </DivForm>
        <DivForm>
          {"תאריך שחרור *"}
          <InputForm ref={releaseDateRef} type="date" />
        </DivForm>
        <DivForm>
          {"מחלקה *"}
          <SelectForm ref={platoonRef}>
            <option value={null}></option>
            {myPlatoons.map((platoon, i) => {
              return (
                <option key={i} value={platoon.id}>
                  {platoon.platoonName}
                </option>
              );
            })}
          </SelectForm>
        </DivForm>

        <DivForm>
          {"כיתה *"}
          <SelectForm ref={classRef}>
            <option value={null}></option>

            {myClasses.map((oneClass, i) => {
              return (
                <option key={i} value={oneClass.id}>
                  {oneClass.className}
                </option>
              );
            })}
          </SelectForm>
        </DivForm>

        <DivForm>
          {"דרגה *"}
          <SelectForm ref={rankRef}>
            <option value={null}></option>

            {ranks.map((rank, i) => {
              return (
                <option key={i} value={rank.id}>
                  {rank.rankName}
                </option>
              );
            })}
          </SelectForm>
        </DivForm>
        <DivForm>
          {"פקל"}
          <SelectForm ref={pakalRef}>
            <option value={null}></option>

            {pakals.map((pakal, i) => {
              return (
                <option key={i} value={pakal.id}>
                  {pakal.pakalName}
                </option>
              );
            })}
          </SelectForm>
        </DivForm>
      </AddSoldierFormContainer>
      <ButtonsForm>
        <ButtonOpenForm onClick={() => setOpen(true)}>
          <CreateIcon fontSize="large" />
        </ButtonOpenForm>
        <ButtonSubmitForm onClick={() => handleClick(true)}>
          <SendIcon fontSize="large" />
        </ButtonSubmitForm>
        <ButtonCancelForm onClick={() => handleClick(false)}>
          <CloseIcon fontSize="large" />
        </ButtonCancelForm>
      </ButtonsForm>
            <Error>{isError && `אנא מלאו את כל שדות החובה`}</Error>
    </AddSoldierContainer>
  );
}

export default AddSoldierForm;
