import styled from "styled-components";

export const EquipmentsPageContainer = styled.div`
  height: 90vh;
  width: 100%;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const EquipmentsPageInnerContainer = styled.div`
  height: 100%;
  width: 400px;
`;
export const EquipmentContainer = styled.div`
  display: flex;
  padding: 5px;
  justify-content: space-between ;
  &:hover {
    background-color: #ede43b;
  }
`;
