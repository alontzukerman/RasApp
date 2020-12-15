import React from 'react'
import styled from 'styled-components';
import { useHistory } from 'react-router-dom' ;


// onClick={()=>history.push(`/notes/${note.id}`)
function NoteRow({note}) {
    // const history = useHistory();
    return (
        <NotRow>
            <NotTitle>{note.title}</NotTitle>
            <NotContent>{note.noteContent}</NotContent>
        </NotRow>
            
    
    )
}

const NotRow = styled.div`
    height: 10vh ;
    background-color: #fff ;
    border: 2px solid black ;
    display: flex ;
    flex-direction: column ;
    justify-content: space-between ;
    align-items: flex-start ;
    padding: 0.5em ;
    &:hover {
        background-color: #777 ;
    }
`;
const NotTitle = styled.div`
    width: 25vw ;

`;
const NotContent = styled.div`
    width: 25vw ;

`;
export default NoteRow
