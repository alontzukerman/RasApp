import React, { useEffect, useState } from "react";
import styled from "styled-components";
import network from "../network";
import UserRow from "../components/UserRow";
import { SoldiersPageContainer } from "../styledComponents/soldierspage";
import {
  GlobalTable,
  Button,
  Title,
  ButtonsCon,
} from "../styledComponents/global";
import AddSoldierForm from "../components/AddSoldierForm";

function UsersPage() {
  const [users, setUsers] = useState();
  const getUsers = async () => {
    const { data } = await network.get(`/api/users`);
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);
console.log(users)
  return (
    <SoldiersPageContainer>
      <Title>סגל</Title>
      {users && (
        <GlobalTable>
          {users.map((user, i) => {
            return <UserRow user={user} key={i} />;
          })}
        </GlobalTable>
      )}
    </SoldiersPageContainer>
  );
}

export default UsersPage;
