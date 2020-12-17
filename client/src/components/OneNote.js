import React from 'react'
import styled from 'styled-components';
import { NoteContainer, NoteTitle, NoteContent } from '../styledComponents/notespage';
import { useHistory } from 'react-router-dom' ;


// onClick={()=>history.push(`/notes/${note.id}`)
function OneNote({note}) {
    // const history = useHistory();
    return (
        <NoteContainer>
            <NoteTitle>{note.title}</NoteTitle>
            <NoteContent>{note.noteContent}</NoteContent>
        </NoteContainer>
            
    
    )
}

export default OneNote
