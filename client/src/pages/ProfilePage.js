import React, { useEffect, useState } from "react";
import network from "../network";
import ReactWhatsapp from "react-whatsapp";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import styled from "styled-components";
import {
  TabsContainer,
  Tab,
  InnerTab,
  Label,
} from "../styledComponents/global";
import { ProfilePageContainer } from '../styledComponents/profilepage';
function ProfilePage() {
  const [user, setUser] = useState();
  const getMyProfile = async () => {
    const { data } = await network.get(`/api/users/profile`);
    console.log(data);
    setUser(data);
  };
  useEffect(() => {
    getMyProfile();
  }, []);
  return (
    <ProfilePageContainer>
      {user && (
        <TabsContainer>
          <Tab>
            <Label>שם פרטי</Label>
            <InnerTab>{user.firstName}</InnerTab>
          </Tab>
          <Tab>
            <Label>שם משפחה</Label>
            <InnerTab>{user.lastName}</InnerTab>
          </Tab>
          <Tab>
            <Label>מספר אישי</Label>
            <InnerTab>{user.id}</InnerTab>
          </Tab>
          <Tab>
            <Label>פלאפון</Label>
            <InnerTab>
              {user.phoneNumber}
              <ReactWhatsapp
                number={"+972" + user.phoneNumber.slice(1)}
                message="."
                element={WhatsAppIcon}
              />
            </InnerTab>
          </Tab>
          <Tab>
            <Label>דרגה</Label>
            <InnerTab>{user.Rank.rankName}</InnerTab>
          </Tab>
          <Tab>
            <Label>תפקיד</Label>
            <InnerTab>{user.Role.roleShort}</InnerTab>
          </Tab>

          <Tab>
            <Label>כתובת</Label>
            <InnerTab>{user.address}</InnerTab>
          </Tab>

          <Tab>
            <Label>אימייל</Label>
            <InnerTab>{user.email}</InnerTab>
          </Tab>
          <Tab>
            <Label>מחלקה</Label>
            <InnerTab>{user.Platoon ? user.Platoon.platoonName : ""}</InnerTab>
          </Tab>
          <Tab>
            <Label>כיתה</Label>
            <InnerTab>{user.Class ? user.Class.className : ""}</InnerTab>
          </Tab>
        </TabsContainer>
      )}
    </ProfilePageContainer>
  );
}
const ProfileContainer = styled.div``;

export default ProfilePage;
