import React, { useEffect, useState } from "react";
import styled from "styled-components";
import network from "../network";
import SoldierRow from "../components/SoldierRow";
import { SoldiersPageContainer } from "../styledComponents/soldierspage";
import {
  GlobalTable,
  Button,
  Title,
  ButtonsCon,
} from "../styledComponents/global";
import AddSoldierForm from "../components/AddSoldierForm";
function SoldiersPage() {
  const [platoons, setPlatoons] = useState();
  const [soldiers, setSoldiers] = useState();

  const getPlatoons = async () => {
    const { data } = await network.get("/api/platoons");
    setPlatoons(data);
  };
  const getPlatoonSoldiers = async (platoonId) => {
    const { data } = await network.get(`/api/platoons/soldiers/${platoonId}`);
    setSoldiers(data);
  };
  useEffect(() => {
    platoons && getPlatoonSoldiers(platoons[0].id);
  }, [platoons]);

  useEffect(() => {
    getPlatoons();
  }, []);

  return (
    <SoldiersPageContainer>
      <Title>חיילים</Title>
      <AddSoldierForm />
      <ButtonsCon>
        {platoons &&
          platoons.map((platoon, i) => {
            return (
              <Button onClick={() => getPlatoonSoldiers(platoon.id)} key={i}>
                {platoon.platoonName}
              </Button>
            );
          })}
      </ButtonsCon>
      {soldiers && (
        <GlobalTable>
          {soldiers.map((soldier, i) => {
            return <SoldierRow soldier={soldier} key={i} />;
          })}
        </GlobalTable>
      )}
    </SoldiersPageContainer>
  );
}

export default SoldiersPage;
