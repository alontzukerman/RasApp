import styled from "styled-components";
import { Theme } from "../theme";

const theme = Theme();

export const EquipmentsPageContainer = styled.div`
  height: 90vh;
  width: 100%;
  background-color: ${theme.background};
  color: ${theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const EquipmentsPageInnerContainer = styled.div`
  height: 100%;
  width: 400px;
`;
export const EquipmentContainer = styled.div`
  display: flex;
  padding: 5px;
  margin: 3px 0 ;
  background-color: rgba(200, 200, 200, 0.3);
  justify-content: space-between;
`;
