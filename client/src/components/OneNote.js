import React from "react";
import styled from "styled-components";
import {
  NoteContainer,
  NoteTitle,
  NoteContent,
  NoteButtons,
  NoteUpdateButton,
  NoteDeleteButton,
} from "../styledComponents/notespage";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { useHistory } from "react-router-dom";

// onClick={()=>history.push(`/notes/${note.id}`)
function OneNote({ note, handleUpdate, handleDelete }) {
  console.log(note);
  return (
    <NoteContainer>
      <NoteTitle>{note.title}</NoteTitle>
      <NoteContent>{note.noteContent}</NoteContent>
      <NoteButtons>
        <NoteUpdateButton onClick={() => handleUpdate(note.id)}>
          <EditOutlinedIcon />
        </NoteUpdateButton>
        <NoteDeleteButton onClick={() => handleDelete(note.id)}>
          <DeleteOutlineOutlinedIcon />
        </NoteDeleteButton>
      </NoteButtons>
    </NoteContainer>
  );
}

export default OneNote;
