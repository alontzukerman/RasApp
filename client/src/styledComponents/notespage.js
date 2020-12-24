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
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  justify-items: center ;
`;
export const NoteContainer = styled.div`
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 3px 3px 3px 1px rgba(50, 50, 50, 0.5);
  background-color: #ede43b;
  height: 150px;
  width: 300px ;
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: relative;
`;
export const NoteTitle = styled.div`
  position: absolute;
  background-color: rgba(50, 50, 50, 0.5) ;
  box-shadow: 0px 2px 3px 0px rgba(50, 50, 50, 0.6);
  top: 0;
  right: 10;
  left: 10;
  padding: 5px 10px;
  margin-top: -30px;
  font-size: 1.1em ;

  letter-spacing: 1px;
`;
export const NoteContent = styled.div`
  font-size: 0.9em;
`;
export const NoteButtons = styled.div`
display: flex ;
position: absolute ;
left: 0 ;
bottom: 0 ;
`;
export const AddNoteButton = styled.div`
cursor: pointer; 
  height: 40px ;
  display: flex ;
  align-items: center ;
  background-color: rgba(50, 50, 50, 0.5) ;
  box-shadow: 0px 2px 3px 0px rgba(50, 50, 50, 0.6);
  justify-content: center ;
  padding: 5px 10px ;
  font-size: 1.2em ;
  margin-bottom: 20px ;
`;
export const NoteDeleteButton = styled.div`
cursor: pointer; 
/* position: absolute ; */
/* left: 0 ; */
display: flex ;
justify-content: center ;
align-items: center ;
height: 100% ;
width: 40px ;
&:hover {
  background-color: #eb6d6d ;
}

`;
export const NoteUpdateButton = styled.div`
cursor: pointer; 
/* position: absolute ; */
/* left: 0 ; */
display: flex ;
justify-content: center ;
align-items: center ;
height: 100% ;
width: 40px ;
&:hover {
  background-color: #c7bf32 ;
}

`;