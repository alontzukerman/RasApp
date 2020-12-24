import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import network from "../network";
import styled from "styled-components";
import PtorRow from "./PtorRow";
import { useContext } from "react";
import { User } from "../context";
import {
  ParaContainer,
  ParaTitle,
  ParaAddButton,
  ParaRows,
  ModalContainer,
  ModalTitle,
  ModalButtons,
  ModalButton,
  Input,
  Select,
  ModalForm,
} from "../styledComponents/global";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

function Ptors({ soldierId }) {
  const selectCurrent = useRef(null);
  const inputDate = useRef(null);
  const inputDays = useRef(null);
  const [ptors, setPtors] = useState([]);
  const [myPtors, setMyPtors] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  const gUser = useContext(User);
  console.log(gUser);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal(bool) {
    //   console.log()
    bool &&
      createPtor(
        selectCurrent.current.value,
        inputDate.current.value,
        inputDays.current.value
      );
    setIsOpen(false);
  }
  const getPtorsBySoldierId = async () => {
    const { data } = await network.get(`/api/ptors/soldier/${soldierId}`);
    setMyPtors(data);
  };
  const createPtor = async (ptorId, start, days) => {
    console.log("creating new ptor");
    const newPtor = {
      ptorId: ptorId,
      soldierId: soldierId,
      startDate: start,
      givenDays: days,
      userId: gUser.user.userId,
    };
    const response = await network.post(`/api/ptors`, newPtor);
    console.log(response);
    getPtorsBySoldierId();
  };
  const getInfoAbout = async () => {
    const { data } = await network.get(`/api/ptors`);
    setPtors(data);
  };
  const handleDelete = async (id) => {
    const response = await network.delete(`/api/ptors/${id}`);
    console.log(response);
    getPtorsBySoldierId();
  };

  useEffect(() => {
    getPtorsBySoldierId();
  }, []);
  return (
    <ParaContainer>
      <ParaTitle>פטורים</ParaTitle>
      {gUser.user.roleId == 2 && (
        <ParaAddButton onClick={openModal}>+</ParaAddButton>
      )}
      <ParaRows>
        {myPtors.map((ptor, i) => {
          return <PtorRow ptor={ptor} handleDelete={handleDelete} />;
        })}
      </ParaRows>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={() => getInfoAbout()}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="CreatePtor"
      >
        <ModalContainer>
          <ModalTitle>פטור חדש</ModalTitle>
          <ModalForm>
            <Select ref={selectCurrent}>
              {ptors.map((ptor, i) => {
                return <option value={`${ptor.id}`}>{ptor.ptorName}</option>;
              })}
            </Select>
            <Input
              ref={inputDate}
              type="date"
              placeholder="תחילת הפטור"
            ></Input>
            <Input
              ref={inputDays}
              type="number"
              placeholder="תוקף הפטור"
            ></Input>
            <ModalButtons>
              <ModalButton onClick={() => closeModal(true)}>שלח</ModalButton>
              <ModalButton onClick={() => closeModal(false)}>בטל</ModalButton>
            </ModalButtons>
          </ModalForm>
        </ModalContainer>
      </Modal>
    </ParaContainer>
  );
}

export default Ptors;
