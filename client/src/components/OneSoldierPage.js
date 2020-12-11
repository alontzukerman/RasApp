import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Certifications from "./Certifications";
import Exams from "./Exams";
import Ptors from "./Ptors";
import { render } from "react-dom";
import ReactWhatsapp from "react-whatsapp";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

function OneSoldierPage() {
  const { soldierId } = useParams();
  const [soldier, setSoldier] = useState([]);

  const getSoldierById = async () => {
    const { data } = await axios.get(`/api/soldiers/${soldierId}`);
    setSoldier(data);
  };
  useEffect(() => {
    getSoldierById();
  }, []);

  return (
    <>
      {soldier.phoneNumber && (
        <SoldierContainer>
          <Tabs>
            <Tab>{soldier.id}</Tab>
            <Tab>
              {soldier.phoneNumber}
              <ReactWhatsapp
                number={"+972" + soldier.phoneNumber.slice(1)}
                message="."
                element={WhatsAppIcon}
              />
            </Tab>
            <Tab>{soldier.firstName}</Tab>
            <Tab>{soldier.lastName}</Tab>
            <Tab>{soldier.birthday}</Tab>
            <Tab>{soldier.address}</Tab>
          </Tabs>
          <Certifications soldierId={soldierId} />
          <Exams soldierId={soldierId} />
          <Ptors soldierId={soldierId} />
        </SoldierContainer>
      )}
    </>
  );
}

const SoldierContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Tabs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
  margin: 0.5em;
`;
const Tab = styled.div`
  height: 5vh;
  width: 40vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #555;
  padding: 0.5em;
`;

export default OneSoldierPage;
