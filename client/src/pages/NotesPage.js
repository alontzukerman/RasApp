import React, { useEffect, useState, useRef } from "react";
import network from "../network";
import Modal from "react-modal";
import styled from "styled-components";
import {
  NotesPageContainer,
  NotesPageInnerContainer,
} from "../styledComponents/notespage";
import { Button, Title } from "../styledComponents/global";
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
  };
  useEffect(() => {
    getNotesByUserId();
  }, []);
  return (
    <NotesPageContainer>
      <Title>פתקים</Title>
      <Button onClick={openModal}>הוסף פתק חדש</Button>
      <NotesPageInnerContainer>
        {myNotes.map((note, i) => {
          return <OneNote note={note} key={i} />;
        })}
      </NotesPageInnerContainer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="CreateNote"
      >
        <h2>Create New Note</h2>
        <button onClick={() => closeModal(false)}>CLOSE</button>
        <button onClick={() => closeModal(true)}>SUBMIT</button>
        <form>
          <input ref={titleRef} placeholder="title"></input>
          <input ref={contentRef} placeholder="content"></input>
        </form>
      </Modal>
    </NotesPageContainer>
  );
}
export default NotesPage;
