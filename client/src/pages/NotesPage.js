import React,{ useEffect, useState, useRef} from 'react'
import axios from 'axios'
import Modal from 'react-modal';
import styled from 'styled-components';
import NoteRow from '../components/NoteRow';

function NotesPage({userId}) {
    const selectCurrent = useRef(null);
    const inputMark = useRef(null);
    const [notes,setNotes] = useState([]);
    const [myNotes,setMyNotes] = useState([]);
    const [modalIsOpen,setIsOpen] = useState(false);

    // function openModal() {
    //     setIsOpen(true);
    // }
    // function closeModal(bool){
    //     bool && createExams(selectCurrent.current.value,inputMark.current.value)
    //     setIsOpen(false);
    // }
    const getNotesByUserId = async () => {
        const { data } = await axios.get(`/api/notes/user/1`);
        setMyNotes(data);
    }
    const createNote = async (title,noteContent) => {
        console.log('creating new note')
        const newNote = {
            title: title,
            noteContent: noteContent,
    }
        const response = await axios.post(`/api/notes`,newNote);
        console.log(response);
    }
    useEffect(()=>{
        getNotesByUserId();
    },[])
    return (
        <div>
            <SoldiersContainer>
            {/* <ButtonsCon>
            {
                myNotes && 
                myNotes .map((note,i)=>{
                    return <button onClick={()=>getPlatoonSoldiers(platoon.id)}>{platoon.platoonName}</button>
                })
            }
            </ButtonsCon> */}
            {
                myNotes.map((note,i)=>{
                    return <NoteRow note={note} key={i} /> ;
                })
            }
        </SoldiersContainer>
            
        </div>
    )
}

const SoldiersContainer = styled.div`
    display: flex ;
    flex-direction: column ;
    align-items: center ;
`;

const ButtonsCon = styled.div``;

export default NotesPage
