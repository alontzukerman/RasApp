import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Modal from "react-modal";
import styled from "styled-components";
import NoteRow from "../components/NoteRow";

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

  function openModal() {
    setIsOpen(true);
  }
  function closeModal(bool) {
    bool && createNote(titleRef.current.value, contentRef.current.value);
    setIsOpen(false);
  }
  const getNotesByUserId = async () => {
    const { data } = await axios.get(`/api/notes/user/1`);
    setMyNotes(data);
  };
  const createNote = async (title, noteContent) => {
    console.log("creating new note");
    const newNote = {
      userId: 1,
      title: title,
      noteContent: noteContent,
    };
    const response = await axios.post(`/api/notes`, newNote);
    console.log(response);
  };
  useEffect(() => {
    getNotesByUserId();
  }, []);
  return (
    <NotesCon>
      {myNotes.map((note, i) => {
        return <NoteRow note={note} key={i} />;
      })}
      <Button onClick={openModal}>+</Button>
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
    </NotesCon>
  );
}

const NotesCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Button = styled.button``;
export default NotesPage;
