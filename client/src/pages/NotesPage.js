import React, { useEffect, useState, useRef } from "react";
import network from "../network";
import Modal from "react-modal";
import styled from "styled-components";
import { PageContainer, FormContainer } from "../styledComponents/containers";
import { Title } from "../styledComponents/elements";
import { User } from '../context';
import { Button} from "@material-ui/core";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import NoteRow from "../components/NoteRow";
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
  console.log('gUser',gUser);
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
      userId: gUser.user.id,
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
    <PageContainer>
      <Title>פתקים</Title>
      <FormContainer>
        <Button onClick={openModal}>
          <NoteAddIcon />
          הוסף פתק חדש
        </Button>
        {myNotes.map((note, i) => {
          return <NoteRow note={note} key={i} />;
        })}
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
      </FormContainer>
    </PageContainer>
  );
}
export default NotesPage;
