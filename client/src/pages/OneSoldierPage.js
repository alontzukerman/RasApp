import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import network from "../network";
import styled from "styled-components";
import Certifications from "../components/Certifications";
import Exams from "../components/Exams";
import Ptors from "../components/Ptors";
import { render } from "react-dom";
import ReactWhatsapp from "react-whatsapp";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import {
  OneSoldierPageContainer,
  OneSoldierPageInnerContainer,
} from "../styledComponents/onesoldierpage";
import {
  TabsContainer,
  Tab,
  InnerTab,
  Label,
} from "../styledComponents/global";
function OneSoldierPage() {
  const { soldierId } = useParams();
  const [soldier, setSoldier] = useState([]);

  const getSoldierById = async () => {
    const { data } = await network.get(`/api/soldiers/${soldierId}`);
    setSoldier(data);
  };
  useEffect(() => {
    getSoldierById();
  }, []);

  return (
    <>
      {soldier.phoneNumber && (
        <OneSoldierPageContainer>
          <OneSoldierPageInnerContainer>
            <TabsContainer>
              <Tab>
                <Label>שם פרטי</Label>
                <InnerTab>{soldier.firstName}</InnerTab>
              </Tab>
              <Tab>
                <Label>שם משפחה</Label>
                <InnerTab>{soldier.lastName}</InnerTab>
              </Tab>
              <Tab>
                <Label>מספר אישי</Label>
                <InnerTab>{soldier.id}</InnerTab>
              </Tab>
              <Tab>
                <Label>פלאפון</Label>
                <InnerTab>
                  {soldier.phoneNumber}
                  <ReactWhatsapp
                    number={"+972" + soldier.phoneNumber.slice(1)}
                    message="."
                    element={WhatsAppIcon}
                  />
                </InnerTab>
              </Tab>
              <Tab>
                <Label>תאריך לידה</Label>
                <InnerTab>{soldier.birthday}</InnerTab>
              </Tab>
              <Tab>
                <Label>כתובת</Label>
                <InnerTab>{soldier.address}</InnerTab>
              </Tab>
            </TabsContainer>
            <Certifications soldierId={soldierId} />
            <Exams soldierId={soldierId} />
            <Ptors soldierId={soldierId} />
          </OneSoldierPageInnerContainer>
        </OneSoldierPageContainer>
      )}
    </>
  );
}

export default OneSoldierPage;
