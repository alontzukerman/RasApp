import styled from "styled-components";
import { Theme } from '../theme';

const theme = Theme() ;
export const ProfilePageContainer = styled.div`
  height: 90vh;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  /* overflow-x: ${(props) => (props.open ? "hidden" : "")}; */
  background-color: ${theme.background};
  color: ${theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
