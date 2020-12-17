import styled from "styled-components";

export const NotesPageContainer = styled.div`
  height: 90vh;
  width: 100%;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const NotesPageInnerContainer = styled.div`
  height: 100%;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  align-items: center;
`;
export const NoteContainer = styled.div`
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 3px 3px 3px 1px rgba(50,50,50,0.5) ;
  background-color: #ede43b;
  height: 150px;
  display: flex;
  flex-direction: column;
  padding: 10px ;
`;
export const NoteTitle = styled.h2`
letter-spacing: 1px ;
padding-bottom: 5px ;
border-bottom: 1px solid black ;
`;
export const NoteContent = styled.div`
font-size: 0.9em ;
`;
