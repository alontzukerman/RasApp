import React, { useEffect, useState } from "react";
import network from "../network";
import Modal from "react-modal";

import EquipmentRow from "../components/EquipmentRow";
import {
  EquipmentsPageContainer,
  EquipmentsPageInnerContainer,
} from "../styledComponents/equipmentspage";
import { Button, Title } from "../styledComponents/global";

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
  const [equipments, setEquipments] = useState();
  const getEquipments = async () => {
    const { data } = await network.get("/api/equipments");
    setEquipments(data);
  };
  const createEquipment = async () => {
    const newEquipment = {};
    const { data } = await network.post("/api/equipments", newEquipment);
  };

  useEffect(() => {
    getEquipments();
  }, []);
  return (
    <EquipmentsPageContainer>
      <Title>ציוד</Title>
      {/* <Button onClick={openModal}>הוסף פתק חדש</Button> */}
      <EquipmentsPageInnerContainer>
        {equipments &&
          equipments.map((equipment, i) => {
            return <EquipmentRow equipment={equipment} key={i} />;
          })}
      </EquipmentsPageInnerContainer>
    </EquipmentsPageContainer>
  );
}

export default EquipmentsPage;
