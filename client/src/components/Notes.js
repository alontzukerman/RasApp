import React from 'react'

function Notes() {
    const selectCurrent = useRef(null);
    const inputMark = useRef(null);
    const [notes,setNotes] = useState([]);
    const [myExams,setMyExams] = useState([]);
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
        const response = await axios.post(`/api/exams`,newExam);
        console.log(response);
    }
    const getInfoAbout = async () => {
        const { data } = await axios.get(`/api/exams`);
        setExams(data);
    }
    useEffect(()=>{
        getExamsBySoldierId();
    },[])
    return (
        <div>
            
        </div>
    )
}

export default Notes
