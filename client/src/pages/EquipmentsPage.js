import React, { useEffect, useState, useRef } from "react";
import network from "../network";
import Modal from "react-modal";
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
import { useContext } from "react";
import { User } from "../context";
import EquipmentRow from "../components/EquipmentRow";
import {
  EquipmentsPageContainer,
  EquipmentsPageInnerContainer,
} from "../styledComponents/equipmentspage";
import { GlobalTable, Button, Title } from "../styledComponents/global";

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
function EquipmentsPage() {
  const [allEquipment, setAllEquipment] = useState();
  const [equipments, setEquipments] = useState();
  const selectCurrent = useRef(null);
  const inputAmount = useRef(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  const gUser = useContext(User);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal(bool) {
    bool &&
      createEquipment(selectCurrent.current.value, inputAmount.current.value);
    setIsOpen(false);
  }

  const getEquipments = async () => {
    const { data } = await network.get("/api/equipments/user");
    setEquipments(data);
  };
  const createEquipment = async (equipment, amount) => {
    const newEquipment = {
      equipmentId: equipment,
      amount: amount,
    };
    const response = await network.post("/api/equipments", newEquipment);
    console.log(response);
    getEquipments();
  };

  const getAllEquipment = async () => {
    const { data } = await network.get("/api/equipments");
    setAllEquipment(data);
  };
  const handleDelete = async (id) => {
    const response = await network.delete(`/api/equipments/${id}`);
    console.log(response);
    getEquipments();
  };

  useEffect(() => {
    getEquipments();
  }, []);
  return (
    // <EquipmentsPageContainer>
    //   <Title>ציוד</Title>
    //   {/* <Button onClick={openModal}>הוסף פתק חדש</Button> */}
    //   <GlobalTable>
    //     {equipments &&
    //       equipments.map((equipment, i) => {
    //         return <EquipmentRow equipment={equipment} key={i} />;
    //       })}
    //   </GlobalTable>
    // </EquipmentsPageContainer>
    <EquipmentsPageContainer>
      <Title>ציוד</Title>
      <ParaContainer>
        <ParaTitle>ציוד</ParaTitle>
        <ParaAddButton onClick={openModal}>+</ParaAddButton>
        <ParaRows>
          {equipments &&
            equipments.map((equipment, i) => {
              return (
                <EquipmentRow
                  handleDelete={handleDelete}
                  equipment={equipment}
                  key={i}
                />
              );
            })}
        </ParaRows>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={() => getAllEquipment()}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="CreateEquipment"
        >
          <ModalContainer>
            <ModalTitle>ציוד חדש</ModalTitle>
            <ModalForm>
              <Select ref={selectCurrent}>
                {allEquipment &&
                  allEquipment.map((equipment, i) => {
                    return (
                      <option value={`${equipment.id}`}>
                        {equipment.equipmentName}
                      </option>
                    );
                  })}
              </Select>
              <Input ref={inputAmount} placeholder="כמות"></Input>
              <ModalButtons>
                <ModalButton onClick={() => closeModal(true)}>שלח</ModalButton>
                <ModalButton onClick={() => closeModal(false)}>בטל</ModalButton>
              </ModalButtons>
            </ModalForm>
          </ModalContainer>
        </Modal>
      </ParaContainer>
    </EquipmentsPageContainer>
  );
}

export default EquipmentsPage;
