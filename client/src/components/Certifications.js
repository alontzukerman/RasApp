import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import network from "../network";
import styled from "styled-components";
import CertificationRow from "./CertificationRow";
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

function Certifications({ soldierId }) {
  const selectCurrent = useRef(null);
  const [certifications, setCertifications] = useState([]);
  const [myCertifications, setMyCertifications] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal(bool) {
    bool && createCertification(selectCurrent.current.value);
    setIsOpen(false);
  }
  const getCertificationsBySoldierId = async () => {
    const { data } = await network.get(
      `/api/certifications/soldier/${soldierId}`
    );
    console.log(data);
    setMyCertifications(data);
  };
  const createCertification = async (certificationId) => {
    console.log("creating new certification");
    const newCertification = {
      certificationId: certificationId,
      soldierId: soldierId,
    };
    const response = await network.post(
      `/api/certifications`,
      newCertification
    );
    console.log(response);
    getCertificationsBySoldierId();
  };
  const getInfoAbout = async () => {
    const { data } = await network.get(`/api/certifications`);
    setCertifications(data);
  };
  const handleDelete = async (id) => {
    const response = await network.delete(`/api/certifications/${id}`);
    console.log(response);
    getCertificationsBySoldierId();
  };
  useEffect(() => {
    getCertificationsBySoldierId();
  }, []);

  return (
    <ParaContainer>
      <ParaTitle>הסמכות</ParaTitle>
      <ParaAddButton onClick={openModal}>+</ParaAddButton>
      <ParaRows>
        {myCertifications.map((certification, i) => {
          return <CertificationRow handleDelete={handleDelete} certification={certification} />;
        })}
      </ParaRows>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={() => getInfoAbout()}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="CreateCertification"
      >
        <ModalContainer>
          <ModalTitle>הסמכה חדשה</ModalTitle>
          <ModalForm>
            <Select ref={selectCurrent}>
              {certifications.map((certification, i) => {
                return (
                  <option value={`${certification.id}`}>
                    {certification.certificationName}
                  </option>
                );
              })}
            </Select>
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
export default Certifications;
