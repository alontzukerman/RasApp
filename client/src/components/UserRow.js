import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { SoldierRowContainer } from "../styledComponents/soldierspage";
import { FormName } from "../styledComponents/global";
function UserRow({ user }) {
  const history = useHistory();
  return (
    <SoldierRowContainer onClick={() => history.push(`/profile/${user.id}`)}>
      <FormName>{user.id}</FormName>
      <FormName>{user.firstName}</FormName>
      <FormName>{user.lastName}</FormName>
      <FormName>{user.Role.roleShort}</FormName>
      <FormName>
        {user.Platoon && user.Platoon.platoonName}
        {user.Class && user.Class.className}
      </FormName>
    </SoldierRowContainer>
  );
}

export default UserRow;
