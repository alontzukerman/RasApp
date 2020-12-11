import React from 'react'
import styled from 'styled-components';
import { useHistory } from 'react-router-dom' ;


// onClick={()=>history.push(`/notes/${note.id}`)
function NoteRow({note}) {
    // const history = useHistory();
    return (
        <NotRow>
            <NotCol>{note.title}</NotCol>
            <NotCol>{note.noteContent}</NotCol>
        </NotRow>
            
    
    )
}

const NotRow = styled.div`
    height: 10vh ;
    width: 90vw ;
    background-color: #fff ;
    border: 2px Noteid black ;
    display: flex ;
    flex-direction: row-reverse ;
    justify-content: space-between ;
    align-items: center ;
    padding: 0.5em ;
    &:hover {
        background-color: #777 ;
    }
`;
const NotCol = styled.div`
    width: 25vw ;
    display: flex ;
    justify-content: center ;
    align-items: center ;
`;
export default NoteRow
