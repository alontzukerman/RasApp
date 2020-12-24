import React, { useEffect, useState, useRef } from "react";
import network from "../network";
import Modal from "react-modal";
import styled from "styled-components";
import {
  NotesPageContainer,
  NotesPageInnerContainer,
  AddNoteButton
} from "../styledComponents/notespage";
import {
  Button,
  Title,
  ModalContainer,
  ModalTitle,
  ModalButtons,
  ModalButton,
  Input,
  Select,
  ModalForm,
} from "../styledComponents/global";
import { User } from "../context";
// import { Button} from "@material-ui/core";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import OneNote from "../components/OneNote";
import { useContext } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

function NotesPage({ userId }) {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const [notes, setNotes] = useState([]);
  const [myNotes, setMyNotes] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  const gUser = useContext(User);
  console.log("gUser", gUser);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal(bool) {
    bool && createNote(titleRef.current.value, contentRef.current.value);
    setIsOpen(false);
  }
  const getNotesByUserId = async () => {
    const { data } = await network.get(`/api/notes`);
    setMyNotes(data);
  };
  const createNote = async (title, noteContent) => {
    console.log("creating new note");
    const newNote = {
      userId: gUser.user.userId,
      title: title,
      noteContent: noteContent,
    };
    const response = await network.post(`/api/notes`, newNote);
    console.log(response);
    getNotesByUserId();
  };
  const handleUpdate = (id) => {
    console.log(id);
  };
  const handleDelete = async (id) => {
    console.log(id);
    const response = await network.delete(`/api/notes/${id}`);
    console.log(response);
    getNotesByUserId();
  };
  useEffect(() => {
    getNotesByUserId();
  }, []);
  return (
    <NotesPageContainer>
      <Title>פתקים</Title>
      <AddNoteButton onClick={()=>openModal()}>{`+ הוסף פתק חדש `}</AddNoteButton>
      <NotesPageInnerContainer>
        {myNotes.map((note, i) => {
          return (
            <OneNote
              note={note}
              key={i}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
          );
        })}
      </NotesPageInnerContainer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="CreateNote"
      >
        <ModalContainer>
          <ModalTitle>פתק חדש</ModalTitle>
          <ModalForm>
            <Input ref={titleRef} placeholder="כותרת"></Input>
            <Input ref={contentRef} placeholder="תוכן"></Input>
            <ModalButtons>
              <ModalButton onClick={() => closeModal(true)}>שלח</ModalButton>
              <ModalButton onClick={() => closeModal(false)}>בטל</ModalButton>
            </ModalButtons>
          </ModalForm>
        </ModalContainer>
      </Modal>
    </NotesPageContainer>
  );
}
export default NotesPage;
