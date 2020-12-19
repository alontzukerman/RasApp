import React, { useEffect, useState } from "react";
import styled from "styled-components";
import network from "../network";
import NohehutRow from "../components/NohehutRow";
import {
  NohehutPageContainer,
  NohehutPageInnerContainer,
} from "../styledComponents/nohehutpage";
import { Button, Error, GlobalTable , Title } from "../styledComponents/global";

const currentDate =
  new Date().getFullYear() +
  "-" +
  (new Date().getMonth() + 1) +
  "-" +
  new Date().getDate();

function NohehutPage() {
  const [soldiers, setSoldiers] = useState();
  const [missings, setMissings] = useState();
  const [filledSoldiers, setFilledSoldiers] = useState([]);
  const [isError, setIsError] = useState(false);
  const [nohehut, setNohehut] = useState(new Map());

  const isFilled = async () => {
    const { data } = await network.get(`/api/missings/daily/${currentDate}`);
    // console.log(data);
    setFilledSoldiers(data);
  };
  const getSoldiers = async () => {
    const { data } = await network.get(`/api/soldiers`);
    setSoldiers(data);
  };
  const getMissings = async () => {
    const { data } = await network.get(`/api/missings`);
    setMissings(data);
  };
  const sendNohehut = async () => {
    let nohehutArray = Array.from(nohehut).map(([name, value]) => value);
    console.log(nohehutArray);
    const response = await network.post(`/api/missings/daily`, nohehutArray);
    console.log(response);
  };
  const handleChange = (soldierId, missingId) => {
    nohehut.set(soldierId, {
      soldierId: soldierId,
      missingId: missingId,
      date: currentDate,
    });
  };
  const handleSubmit = () => {
    if (nohehut.size === soldiers.length) {
      setIsError(false);
      setNohehut(nohehut);
      sendNohehut();
    } else {
      setIsError(true);
    }
  };
  useEffect(() => {
    isFilled();
    getSoldiers();
    getMissings();
  }, []);
  return (
    <NohehutPageContainer>
      <Title>נוכחות</Title>
      <GlobalTable>
        {soldiers &&
          missings &&
          soldiers.map((soldier, i) => {
            return (
              <NohehutRow
                key={i}
                soldier={soldier}
                missings={missings}
                isFilled={filledSoldiers.filter(
                  (row) => row.soldierId === soldier.id
                )}
                handleChange={handleChange}
              />
            );
          })}
      </GlobalTable>
      <Button onClick={() => handleSubmit()}>שלח</Button>
      <Error>{isError && "*חייב למלא כלל החיילים"}</Error>
    </NohehutPageContainer>
  );
}

export default NohehutPage;
