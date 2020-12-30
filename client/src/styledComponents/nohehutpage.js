import styled from "styled-components";
import { Theme } from '../theme';

const theme = Theme();

export const NohehutPageContainer = styled.div`
  height: 90vh;
  width: 100%;
  overflow-y: scroll ;

  background-color: ${theme.background};
  color: ${theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const NohehutPageInnerContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;
export const NohRowContainer = styled.div`
  display: flex;
  padding: 5px;
  &:hover {
    background-color: ${theme.main};
  }
`;
