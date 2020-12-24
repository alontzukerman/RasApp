import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import network from "../network";
import styled from "styled-components";
import ExamRow from "./ExamRow";
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
  Error,
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

function Exams({ soldierId }) {
  const selectCurrent = useRef(null);
  const inputMark = useRef(null);
  const [exams, setExams] = useState([]);
  const [myExams, setMyExams] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal(bool) {
    bool && createExams(selectCurrent.current.value, inputMark.current.value);
    setIsOpen(false);
  }
  const getExamsBySoldierId = async () => {
    const { data } = await network.get(`/api/exams/soldier/${soldierId}`);
    setMyExams(data);
  };
  const createExams = async (examId, mark) => {
    console.log("creating new exam");
    const newExam = {
      examId: examId,
      soldierId: soldierId,
      mark: mark,
    };
    const response = await network.post(`/api/exams`, newExam);
    console.log(response);
    getExamsBySoldierId();
  };
  const getInfoAbout = async () => {
    const { data } = await network.get(`/api/exams`);
    setExams(data);
  };
  const handleDelete = async (id) => {
    const response = await network.delete(`/api/exams/${id}`);
    console.log(response);
    getExamsBySoldierId();
  };
  useEffect(() => {
    getExamsBySoldierId();
  }, []);
  return (
    <ParaContainer>
      <ParaTitle>בחנים</ParaTitle>
      <ParaAddButton onClick={openModal}>+</ParaAddButton>
      <ParaRows>
        {myExams.map((exam, i) => {
          return <ExamRow handleDelete={handleDelete} exam={exam} />;
        })}
      </ParaRows>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={() => getInfoAbout()}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="CreateExam"
      >
        <ModalContainer>
          <ModalTitle>מבחן חדש</ModalTitle>
          <ModalForm>
            <Select ref={selectCurrent}>
              {exams.map((exam, i) => {
                return <option value={`${exam.id}`}>{exam.examName}</option>;
              })}
            </Select>
            <Input ref={inputMark} placeholder="תוצאה"></Input>
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

export default Exams;
