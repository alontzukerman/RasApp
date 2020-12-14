import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import network from "../network";
import styled from "styled-components";
import PtorRow from './PtorRow';

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

  function openModal() {
    setIsOpen(true);
  }
  function closeModal(bool) {
    //   console.log()
    bool && createPtor(selectCurrent.current.value,inputDate.current.value,inputDays.current.value);
    setIsOpen(false);
  }
  const getPtorsBySoldierId = async () => {
    const { data } = await network.get(`/api/ptors/soldier/${soldierId}`);
    setMyPtors(data);
  };
  const createPtor = async (ptorId,start,days) => {
    console.log("creating new ptor");
    const newPtor = {
      ptorId: ptorId,
      soldierId: soldierId,
      startDate: start,
      givenDays: days,
      userId: 1,
    };
    const response = await network.post(`/api/ptors`, newPtor);
    console.log(response);
  };
  const getInfoAbout = async () => {
    const { data } = await network.get(`/api/ptors`);
    setPtors(data);
  };
  useEffect(() => {
    getPtorsBySoldierId();
  }, []);
  return (
    <ParaCon>
      <Title>פטורים</Title>
      <Button onClick={openModal}>+</Button>
      {myPtors.map((ptor, i) => {
        return <PtorRow ptor={ptor} />
      })}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={() => getInfoAbout()}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="CreatePtor"
      >
        <h2>Create New Ptor</h2>
        <button onClick={()=>closeModal(false)}>CLOSE</button>
        <button onClick={()=>closeModal(true)}>SUBMIT</button>
        <form>
          <select ref={selectCurrent}>
            {ptors.map((ptor, i) => {
              return (
                <option value={`${ptor.id}`}>{ptor.ptorName}</option>
              );
            })}
          </select>
          <input
            ref={inputDate}
            type="date"
            placeholder="starting date"
          ></input>
          <input ref={inputDays} placeholder="given days"></input>
        </form>
      </Modal>
    </ParaCon>
  );
}
const ParaCon = styled.div`
  min-height: 15vh;
  width: 90vw;
  margin-top: 2vh;
  border: 1px solid white;
`;
const Title = styled.div`
  width: 100%;
  height: 3vh;
  background-color: #444;
  padding: 0.5em 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Button = styled.button``;

export default Ptors;
