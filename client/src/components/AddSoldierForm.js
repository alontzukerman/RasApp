import React, { useRef, useState } from "react";
import {
    AddSoldierContainer,
  AddSoldierFormContainer,
  InputForm,
  DivForm,
  SelectForm,
  ButtonsForm,
  ButtonOpenForm,
  ButtonSubmitForm,
  ButtonCancelForm
} from "../styledComponents/soldierspage";
function AddSoldierForm() {

    const [open,setOpen] =useState(false);

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
  const classsRef = useRef(null);
  const rankRef = useRef(null);
  const pakalRef = useRef(null);


const handleClick = (bool) =>{
    console.log(bool);
}

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
          <InputForm ref={emailInputRef} type="email" />
        </DivForm>
        <DivForm>
          {"מספר טלפון *"}
          <InputForm
            ref={phoneNumberInputRef}
            type="tel"
            pattern="[0-9]{3}-[0-9]{7}"
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
          <SelectForm ref={platoonRef}></SelectForm>
        </DivForm>
        <DivForm>
          {"כיתה *"}
          <SelectForm ref={classsRef}></SelectForm>
        </DivForm>
        <DivForm>
          {"דרגה *"}
          <SelectForm ref={rankRef}></SelectForm>
        </DivForm>
        <DivForm>
          {"פקל"}
          <SelectForm ref={pakalRef}></SelectForm>
        </DivForm>
        <ButtonsForm>
            <ButtonOpenForm onClick={(e)=>{e.stopPropagation(); setOpen(true)}}>O</ButtonOpenForm>
            <ButtonSubmitForm onClick={()=>handleClick(true)}>S</ButtonSubmitForm>
            <ButtonCancelForm onClick={()=>handleClick(false)}>C</ButtonCancelForm>
        </ButtonsForm>
      </AddSoldierFormContainer>
    </AddSoldierContainer>
  );
}

export default AddSoldierForm;
