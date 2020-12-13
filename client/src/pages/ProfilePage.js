import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
function ProfilePage() {
  const [user, setUser] = useState();
  const getMyProfile = async () => {
    const { data } = await axios.get(`/api/users/1`);
    console.log(data);
    setUser(data);
  };
  useEffect(() => {
    getMyProfile();
  }, []);
  return (
    <ProfileCon>
      {user && (
        <Tabs>
          <Tab>{user.id}</Tab>
          <Tab>{user.Rank.rankName}</Tab>
          <Tab>{user.Role.roleShort}</Tab>
          <Tab>{user.firstName}</Tab>
          <Tab>{user.lastName}</Tab>
          <Tab>{user.address}</Tab>
          <Tab>{user.phoneNumber}</Tab>
          <Tab>{user.email}</Tab>
          <Tab>{user.Platoon ? user.Platoon.platoonName : ''}</Tab>
          <Tab>{user.Class ? user.Class.className : ''}</Tab>
        </Tabs>
      )}
    </ProfileCon>
  );
}
const ProfileCon = styled.div``;
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
export default ProfilePage;
