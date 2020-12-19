import React, { useEffect, useState } from "react";
import styled from "styled-components";
import network from "../network";
import SoldierRow from "../components/SoldierRow";
import {
  SoldiersPageContainer,
  ButtonsCon,
} from "../styledComponents/soldierspage";
import { GlobalTable, Button , Title } from "../styledComponents/global";
function SoldiersPage() {
  const [platoons, setPlatoons] = useState();
  const [soldiers, setSoldiers] = useState([]);

  const getPlatoons = async () => {
    const { data } = await network.get("/api/platoons");
    console.log(data);
    setPlatoons(data);
  };
  const getPlatoonSoldiers = async (platoonId) => {
    const { data } = await network.get(`/api/platoons/soldiers/${platoonId}`);
    setSoldiers(data);
  };
  useEffect(() => {
    getPlatoons();
  }, []);

  useEffect(() => {
    platoons && getPlatoonSoldiers(platoons[0].platoonId);
  }, [platoons]);
  return (
    <SoldiersPageContainer>
      <Title>חיילים</Title>

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
      <GlobalTable>
        {soldiers.map((soldier, i) => {
          return <SoldierRow soldier={soldier} key={i} />;
        })}
      </GlobalTable>
    </SoldiersPageContainer>
  );
}

export default SoldiersPage;
