import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import network from "../network";
import { Input, Button, Select , Error } from "../styledComponents/global";

function RegisterStepFour({ newUser }) {
  console.log(newUser);
  const location = useHistory();
  const [completed, setCompleted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [platoons, setPlatoons] = useState([]);
  const [classes, setClasses] = useState([]);
  const [roles, setRoles] = useState([]);

  const platoonRef = useRef(null);
  const classRef = useRef(null);
  const roleRef = useRef(null);

  const getPlatoons = async () => {
    const { data } = await network.get(
      `/api/register/platoons/${newUser.plugaId}`
    );
    setPlatoons(data);
  };
  const getClasses = async () => {
    const { data } = await network.get(
      `/api/register/classes/${newUser.plugaId}`
    );
    setClasses(data);
  };

  const getRoles = async () => {
    const { data } = await network.get(`/api/register/roles`);
    setRoles(data);
  };

  useEffect(() => {
    getPlatoons();
    getClasses();
    getRoles();
  }, []);
  const handleCreate = async () => {
    if (completed) return location.push(`/login`);
    if (
      roleRef.current.value !== ""
    ) {
      let plat = platoonRef.current.value === "" ? null : platoonRef.current.value ;
      let clas = classRef.current.value === "" ? null : classRef.current.value ;
      const userToCreate = {
        ...newUser,
        platoonId: plat,
        classId: clas,
        roleId: roleRef.current.value,
      };
      const { data } = await network.post(`/api/register/user`, userToCreate);
      console.log(data);
      data ? setCompleted(true) : setIsError(true);
    } else setIsError(true);
  };
  const onRoleChange = () => {
    if (roleRef.current.value !== "") {
      switch (roleRef.current.value) {
        case 1: // תפקיד
          break;
        default:
      }
    }
  };
  return (
    <>
      <Select ref={roleRef} onChange={() => onRoleChange()}>
        <option value="">תפקיד</option>
        {roles.map((role, i) => {
          return (
            <option value={role.id} key={i}>
              {role.roleShort}
            </option>
          );
        })}
      </Select>
      <Select ref={platoonRef}>
        <option value="">מחלקה</option>
        {platoons.map((platoon, i) => {
          return (
            <option value={platoon.id} key={i}>
              {platoon.platoonName}
            </option>
          );
        })}
      </Select>
      <Select ref={classRef}>
        <option value="">כיתה</option>
        {classes.map((mClass, i) => {
          return (
            <option value={mClass.id} key={i}>
              {mClass.className}
            </option>
          );
        })}
      </Select>
      <Error>{isError && "וודא שהשדות הרלוונטים מלאים"}</Error>

      <Button onClick={() => handleCreate()}>
        {completed ? "התחבר" : "צור"}
      </Button>
    </>
  );
}

export default RegisterStepFour;
